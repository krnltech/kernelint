#!/bin/bash

# Kernel International Website Deployment Script
# This script automates the deployment process

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check prerequisites
check_prerequisites() {
    print_status "Checking prerequisites..."
    
    if ! command_exists docker; then
        print_error "Docker is not installed. Please install Docker first."
        exit 1
    fi
    
    if ! command_exists docker-compose; then
        print_error "Docker Compose is not installed. Please install Docker Compose first."
        exit 1
    fi
    
    print_success "Prerequisites check passed"
}

# Function to show help
show_help() {
    echo "Kernel International Website Deployment Script"
    echo ""
    echo "Usage: $0 [OPTION]"
    echo ""
    echo "Options:"
    echo "  dev         Deploy in development mode (port 3000 only)"
    echo "  prod        Deploy in production mode (with nginx and ssl)"
    echo "  stop        Stop all services"
    echo "  restart     Restart all services"
    echo "  update      Update and redeploy the application"
    echo "  logs        Show application logs"
    echo "  status      Show service status"
    echo "  cleanup     Clean up unused Docker resources"
    echo "  help        Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 dev      # Deploy for development"
    echo "  $0 prod     # Deploy for production"
    echo "  $0 update   # Update the application"
}

# Deploy in development mode
deploy_dev() {
    print_status "Deploying in development mode..."
    docker-compose up -d kernel-site
    print_success "Development deployment completed!"
    print_status "Application is available at: http://localhost:3000"
}

# Deploy in production mode
deploy_prod() {
    print_status "Deploying in production mode..."
    
    # Check if nginx.conf has been configured
    if grep -q "server_name localhost" nginx.conf; then
        print_warning "nginx.conf still has 'localhost' as server_name"
        print_warning "Please update nginx.conf with your domain name before production deployment"
        read -p "Do you want to continue anyway? (y/N): " confirm
        if [[ $confirm != [yY] ]]; then
            print_error "Deployment cancelled"
            exit 1
        fi
    fi
    
    docker-compose --profile production up -d
    print_success "Production deployment completed!"
    print_status "Application is available at: http://your-domain.com"
}

# Stop all services
stop_services() {
    print_status "Stopping all services..."
    docker-compose --profile production down
    print_success "All services stopped"
}

# Restart services
restart_services() {
    print_status "Restarting services..."
    docker-compose --profile production restart
    print_success "Services restarted"
}

# Update application
update_app() {
    print_status "Updating application..."
    
    # Pull latest code (if in git repo)
    if [ -d ".git" ]; then
        print_status "Pulling latest code..."
        git pull
    fi
    
    # Rebuild and restart
    print_status "Rebuilding containers..."
    docker-compose build kernel-site
    
    print_status "Restarting services..."
    docker-compose up -d kernel-site
    
    print_success "Application updated successfully!"
}

# Show logs
show_logs() {
    print_status "Showing application logs (press Ctrl+C to exit)..."
    docker-compose logs -f kernel-site
}

# Show status
show_status() {
    print_status "Service status:"
    docker-compose ps
    echo ""
    print_status "Container resource usage:"
    docker stats --no-stream --format "table {{.Container}}\t{{.CPUPerc}}\t{{.MemUsage}}\t{{.MemPerc}}\t{{.NetIO}}\t{{.BlockIO}}"
}

# Cleanup unused resources
cleanup() {
    print_status "Cleaning up unused Docker resources..."
    docker system prune -f
    docker volume prune -f
    print_success "Cleanup completed"
}

# Main script logic
main() {
    # Check prerequisites
    check_prerequisites
    
    case "$1" in
        "dev")
            deploy_dev
            ;;
        "prod")
            deploy_prod
            ;;
        "stop")
            stop_services
            ;;
        "restart")
            restart_services
            ;;
        "update")
            update_app
            ;;
        "logs")
            show_logs
            ;;
        "status")
            show_status
            ;;
        "cleanup")
            cleanup
            ;;
        "help"|"--help"|"-h")
            show_help
            ;;
        "")
            print_error "No option provided"
            show_help
            exit 1
            ;;
        *)
            print_error "Unknown option: $1"
            show_help
            exit 1
            ;;
    esac
}

# Run main function with all arguments
main "$@"