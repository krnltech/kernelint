import clsx from "clsx";
import React from "react";
import productPageStyles from "./style.module.css";
import { Button } from "@headlessui/react";
import Link from "next/link";

const Products = () => {
  return (
    <section className="w-full flex flex-col">
      <div className="flex md:flex-row flex-col">
        <div
          className={clsx(productPageStyles["img-coursebee"], "grow basis-1/2")}
        />
        <div className="grow basis-1/2 bg-[#3d5578] p-[60px]">
          <div className="flex flex-col gap-4 text-center">
            <h1 className="text-3xl">Coursebee</h1>
            <p className="text-lg font-light">E-Learning platform</p>
            <p>
              Coursebee is a platform where they can get advice from
              professionals and share their experiences. Here, group members
              will share their creative thinking, everyday issues, career
              advice, guidance, etc., which will help other members. Everything
              including algebra, fluid mechanics, accounting, photography,
              coding, economics, literature will come under this platform. In
              this group we will arrange live sessions and webinars on various
              topics where students can have live interactions with
              professionals and experts. Through this community, Coursebee will
              be the largest online educational platform in Bangladesh.
            </p>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col">
        <div className="grow basis-1/2 bg-[#6cbbc0] p-[60px]">
          <div className="flex flex-col gap-4 text-center">
            <h1 className="text-3xl">Learning Management Software</h1>
            <p>
              A learning management system is a software application for the
              administration, documentation, tracking, reporting, automation and
              delivery of educational courses, training programs, or learning
              and development programs. The learning management system concept
              emerged directly from e-Learning.
            </p>
          </div>
        </div>
        <div className={clsx(productPageStyles["img-lms"], "grow basis-1/2")} />
      </div>
      <div className="flex md:flex-row flex-col">
        <div className={clsx(productPageStyles["img-erp"], "grow basis-1/2")} />
        <div className="grow basis-1/2 bg-[#3d5578] p-[60px]">
          <div className="flex flex-col gap-4 text-center">
            <h1 className="text-xl font-bold">Education ERP Software</h1>
            <p>
              Education, ERP is a single database system that makes information
              and communication easy across various departments of an
              organization. The major objective of education ERP is designed to
              interact with specific modules designed to communicate with other
              modules of the institute.
            </p>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col">
        <div className="grow basis-1/2 bg-[#6cbbc0] p-[60px]">
          <div className="flex flex-col gap-4 text-center">
            <h1 className="text-xl font-bold">Noticebee</h1>
            <p>
              Noticebee is a noticeboard software solution that aims to replace
              the traditional paper based notice wall to digital noticeboard
              video wall with multimedia application. This allows
              institutions/organizations to publish notices/news to the display
              panel managed by noticebee cloud application software. Admin can
              manage and operate notices remotely from anywhere through the
              internet in real time. Along with the noticeboard panel, users can
              also get updated notices from android noticebee mobile
              application.
            </p>
            <div>
              <Button
                className="bg-slate-900 text-slate-100 px-4 py-2 rounded-full outline-0"
                as={Link}
                target="_blank"
                href="https://docs.google.com/document/d/1xDpMpo7bTR6DWnvshQsr0scJ9Pn4fnz1q5oyk9ZYePA/edit?tab=t.0"
              >
                More Info
              </Button>
            </div>
          </div>
        </div>
        <div
          className={clsx(productPageStyles["img-noticebee"], "grow basis-1/2")}
        />
      </div>
    </section>
  );
};

export default Products;
