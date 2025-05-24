import { Field, Input, Label, Textarea } from "@headlessui/react";
import clsx from "clsx";
import React from "react";

const Contact = () => {
  return (
    <section className="w-full">
      <div id="contact" className="w-full grid lg:grid-cols-2 gap-2">
        <form className="asp p-5 border">
          <Field className="w-full p-2">
            <Label htmlFor="name" className="w-full">
              Name
            </Label>
            <Input
              name="name"
              type="text"
              className={clsx(
                "mt-3 block w-full rounded-lg border bg-white/5 px-3 py-1.5 text-sm/6 text-white",
                "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25",
              )}
            />
          </Field>
          <Field className="w-full p-2">
            <Label htmlFor="email" className="w-full">
              Email
            </Label>
            <Input
              name="email"
              type="email"
              className={clsx(
                "mt-3 block w-full rounded-lg border bg-white/5 px-3 py-1.5 text-sm/6 text-white",
                "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25",
              )}
            />
          </Field>
          <Field className="w-full p-2">
            <Label htmlFor="subject" className="w-full">
              Subject
            </Label>
            <Input
              name="subject"
              type="text"
              className={clsx(
                "mt-3 block w-full rounded-lg border bg-white/5 px-3 py-1.5 text-sm/6 text-white",
                "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25",
              )}
            />
          </Field>
          <Field className="w-full p-2">
            <Label htmlFor="message" className="w-full">
              Message
            </Label>
            <Textarea
              name="message"
              rows={6}
              className={clsx(
                "mt-3 block w-full rounded-lg border bg-white/5 px-3 py-1.5 text-sm/6 text-white",
                "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25",
              )}
            />
          </Field>
        </form>
        <div className="text-center aspect-square p-5 flex justify-center align-center bg-slate-100">
          <div className="m-auto">
            <h1 className="text-3xl">Contact us</h1>
            <br />
            <p>
              Flat no: B2, House no: 1/B, Road no- 8, Gulshan-1
              <br />
              Dhaka- 1212, Bangladesh
              <br />
              Contact # +8801762-694455 <br />
              email: contact@kernelinternational.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
