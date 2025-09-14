# Kernel International Website Deployment Guide

This guide will help you deploy the Kernel International website to your server using Docker Compose.

## Prerequisites

### Server Requirements
- Ubuntu 20.04+ or CentOS 8+ (or similar Linux distribution)
- Minimum 2GB RAM, 2 CPU cores
- 10GB+ free disk space
- Docker and Docker Compose installed
- Port 80 and 443 (for HTTPS) available

### Install Docker and Docker Compose

#### On Ubuntu/Debian:
```bash
# Update package list
sudo apt update

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Add your user to docker group
sudo usermod -aG docker $USER

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Verify installation
docker --version
docker-compose --version
```

#### On CentOS/RHEL:
```bash
# Install Docker
sudo yum install -y yum-utils
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
sudo yum install -y docker-ce docker-ce-cli containerd.io

# Start and enable Docker
sudo systemctl start docker
sudo systemctl enable docker

# Install Docker Compose (same as Ubuntu)
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

## Deployment Options

### Option 1: Simple Deployment (Development/Testing)

Deploy just the Next.js application on port 3000:

```bash
# Clone the repository
git clone <your-repository-url>
cd Kernel-site

# Build and start the application
docker-compose up -d kernel-site

# Check if the application is running
docker-compose ps
docker-compose logs kernel-site
```

Your website will be available at: `http://your-server-ip:3000`

### Option 2: Production Deployment with Nginx

Deploy with Nginx reverse proxy for better performance and SSL support:

```bash
# Clone the repository
git clone <your-repository-url>
cd Kernel-site

# Update nginx.conf with your domain name
# Edit the server_name in nginx.conf from 'localhost' to your domain
nano nginx.conf

# Start with production profile (includes nginx and watchtower)
docker-compose --profile production up -d

# Check all services are running
docker-compose ps
```

Your website will be available at: `http://your-domain.com`

## SSL/HTTPS Configuration

To enable HTTPS with SSL certificates:

### 1. Using Let's Encrypt (Recommended)

```bash
# Install certbot
sudo apt install certbot  # Ubuntu/Debian
# or
sudo yum install certbot  # CentOS/RHEL

# Create SSL directory
mkdir ssl

# Obtain SSL certificate
sudo certbot certonly --standalone -d your-domain.com -d www.your-domain.com

# Copy certificates to ssl directory
sudo cp /etc/letsencrypt/live/your-domain.com/fullchain.pem ssl/certificate.crt
sudo cp /etc/letsencrypt/live/your-domain.com/privkey.pem ssl/private.key

# Set appropriate permissions
sudo chown -R $USER:$USER ssl/
chmod 600 ssl/private.key
```

### 2. Update Nginx Configuration

Edit `nginx.conf` and uncomment the SSL sections:

```bash
nano nginx.conf
```

Uncomment and configure:
- The HTTPS server block
- SSL certificate paths
- HTTP to HTTPS redirect

### 3. Restart Services

```bash
docker-compose --profile production down
docker-compose --profile production up -d
```

## Useful Commands

### Managing the Application

```bash
# View logs
docker-compose logs -f kernel-site
docker-compose logs -f nginx

# Restart services
docker-compose restart kernel-site
docker-compose restart nginx

# Update the application
git pull
docker-compose build kernel-site
docker-compose up -d kernel-site

# Stop all services
docker-compose down

# Stop and remove all containers, networks, and volumes
docker-compose down -v
```

### Monitoring

```bash
# Check container status
docker-compose ps

# Check container resource usage
docker stats

# View container logs in real-time
docker-compose logs -f --tail=50 kernel-site

# Execute commands inside containers
docker-compose exec kernel-site sh
docker-compose exec nginx sh
```

### Backup and Restore

```bash
# Create backup
docker-compose down
tar -czf kernel-site-backup-$(date +%Y%m%d).tar.gz .

# Restore from backup
tar -xzf kernel-site-backup-YYYYMMDD.tar.gz
docker-compose up -d
```

## Environment Configuration

Create environment files for different environments:

### Production Environment (.env.production)
```bash
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
# Add other environment variables as needed
```

### Development Environment (.env.development)
```bash
NODE_ENV=development
# Add development-specific variables
```

## Firewall Configuration

Configure your server firewall:

```bash
# Ubuntu (UFW)
sudo ufw allow 22    # SSH
sudo ufw allow 80    # HTTP
sudo ufw allow 443   # HTTPS
sudo ufw enable

# CentOS/RHEL (firewalld)
sudo firewall-cmd --permanent --add-service=ssh
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo firewall-cmd --reload
```

## Troubleshooting

### Common Issues

1. **Port already in use**:
   ```bash
   sudo netstat -tulpn | grep :80
   sudo systemctl stop apache2  # if Apache is running
   ```

2. **Permission denied**:
   ```bash
   sudo chown -R $USER:$USER .
   sudo chmod +x deploy.sh
   ```

3. **Container won't start**:
   ```bash
   docker-compose logs kernel-site
   docker system prune  # Clean up unused containers/images
   ```

4. **SSL certificate issues**:
   ```bash
   # Verify certificate files
   ls -la ssl/
   # Check certificate validity
   openssl x509 -in ssl/certificate.crt -text -noout
   ```

### Health Checks

```bash
# Check application health
curl http://localhost:3000
curl http://localhost/health

# Check Docker container health
docker inspect kernel-international-site --format='{{.State.Health.Status}}'
```

## Performance Optimization

### 1. Enable Nginx Caching (Optional)

Add to nginx.conf:
```nginx
http {
    proxy_cache_path /tmp/nginx_cache levels=1:2 keys_zone=cache:30m max_size=250m;
    # Add caching to location blocks
}
```

### 2. Monitor Resources

```bash
# Check disk usage
df -h

# Check memory usage
free -h

# Monitor container resources
docker stats --no-stream
```

## Security Considerations

1. **Keep Docker updated**:
   ```bash
   sudo apt update && sudo apt upgrade docker-ce
   ```

2. **Regular security updates**:
   ```bash
   # Update base images
   docker-compose pull
   docker-compose up -d
   ```

3. **Monitor logs**:
   ```bash
   # Set up log rotation
   sudo logrotate -f /etc/logrotate.conf
   ```

## Support

For issues related to:
- **Application**: Check the application logs and GitHub repository
- **Docker**: Check Docker documentation
- **Nginx**: Check Nginx error logs
- **SSL**: Verify certificate installation and configuration

## Maintenance

### Regular Tasks
1. Update SSL certificates (if using Let's Encrypt, set up auto-renewal)
2. Monitor disk space and clean up old Docker images
3. Update the application code and rebuild containers
4. Check and rotate logs regularly
5. Monitor container performance and resource usage