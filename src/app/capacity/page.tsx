import clsx from "clsx";
import React from "react";
import capacityStyle from "./style.module.css";

const CapacityPage = () => {
  return (
    <section className="w-full flex flex-col">
      <div className="flex md:flex-row flex-col">
        <div
          className={clsx(capacityStyle["img-management"], "grow basis-1/2")}
        />
        <div className="grow basis-1/2 bg-[#3d5578] text-slate-100 p-[60px]">
          <div className="flex flex-col gap-4">
            <h1 className="text-xl font-bold text-center">Local Training</h1>
            <p>
              {
                "We have long working experience with different ministries under the government of People's Republic of Bangladesh, Donor Agencies' funded projects, International Aid Agencies, International Consultancy Firms such as WORLD BANK, ASIAN DEVELOPMENT BANK, UNDP, SWISS CONTACT, SWISS AGENCY FOR DEVELOPMENT & COOPERATION, DANIDA, IFAD etc."
              }
            </p>
            <p>
              We have institutional partner agencies both in local and abroad.
              Our team is very professional in implementing and organizing
              different training events around the world.
            </p>
            <p>We organize following types of training:</p>
            <ol className="list-decimal">
              <li>Short Term Training (2-5 days) in Bangladesh & abroad.</li>
              <li>Short Term Courses ((7-14 days) in abroad.</li>
              <li>Long Term Courses (21-28 days) in abroad.</li>
            </ol>
            <p>Mode of Training:</p>
            <ol className="list-decimal">
              <li>Customized or Tailor made training program</li>
              <li>On The Shelf or Course Calendar based training program.</li>
            </ol>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col">
        <div className="grow basis-1/2 bg-[#6cbbc0] p-[60px]">
          <div className="flex flex-col gap-4">
            <h1 className="text-xl font-bold text-center">
              FOREIGN TRAINING & STUDY VISIT PROGRAMS
            </h1>
            <p>
              {
                "We have long working experience with different ministries under the government of People's Republic of Bangladesh, Donor Agencies' funded projects, International Aid Agencies, International Consultancy Firms such as WORLD BANK, ASIAN DEVELOPMENT BANK, UNDP, SWISS CONTACT, SWISS AGENCY FOR DEVELOPMENT & COOPERATION, DANIDA, IFAD etc."
              }
            </p>
            <p>
              We have institutional partner agencies both in local and abroad.
              Our team is very professional in implementing and organizing
              different training events around the world.
            </p>
            <p>We organize following types of training:</p>
            <ol className="list-decimal">
              <li>Short Term Training (2-5 days) in Bangladesh & abroad.</li>
              <li>Short Term Courses ((7-14 days) in abroad.</li>
              <li>Long Term Courses (21-28 days) in abroad.</li>
            </ol>
            <p>Mode of Training:</p>
            <ol className="list-decimal">
              <li>Customized or Tailor made training program</li>
              <li>On The Shelf or Course Calendar based training program.</li>
            </ol>
          </div>
        </div>
        <div
          className={clsx(capacityStyle["img-capacity"], "grow basis-1/2")}
        />
      </div>
      <div className="flex md:flex-row flex-col">
        <div
          className={clsx(capacityStyle["img-research"], "grow basis-1/2")}
        />
        <div className="grow basis-1/2 bg-[#5b5b5b] text-slate-100 p-[60px]">
          <div className="flex flex-col gap-4">
            <h1 className="text-xl font-bold text-center">
              WORKSHOPS & CONFERENCE
            </h1>
            <p>
              {
                "We have long working experience with different ministries under the government of People's Republic of Bangladesh, Donor Agencies' funded projects, International Aid Agencies, International Consultancy Firms such as WORLD BANK, ASIAN DEVELOPMENT BANK, UNDP, SWISS CONTACT, SWISS AGENCY FOR DEVELOPMENT & COOPERATION, DANIDA, IFAD etc."
              }
            </p>
            <p>
              We have institutional partner agencies both in local and abroad.
              Our team is very professional in implementing and organizing
              different training events around the world.
            </p>
            <p>We organize following types of training:</p>
            <ol className="list-decimal">
              <li>Short Term Training (2-5 days) in Bangladesh & abroad.</li>
              <li>Short Term Courses ((7-14 days) in abroad.</li>
              <li>Long Term Courses (21-28 days) in abroad.</li>
            </ol>
            <p>Mode of Training:</p>
            <ol className="list-decimal">
              <li>Customized or Tailor made training program</li>
              <li>On The Shelf or Course Calendar based training program.</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapacityPage;
