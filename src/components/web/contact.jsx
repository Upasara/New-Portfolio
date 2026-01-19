import React from "react";
import { Field, FieldGroup, FieldLabel, FieldSet } from "../ui/field";
import { Input } from "../ui/input";

const Contact = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {/* socials */}
      <div>
        <h1>Contact Me</h1>
      </div>
      {/* form */}
      <div>
        <form>
          <FieldGroup>
            <FieldSet>
              <FieldGroup>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="name">Name</FieldLabel>
                    <Input id="name" placeholder="John Doe" />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="email">E-mail</FieldLabel>
                    <Input id="email" placeholder="johndoe@gmail.com" />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="message">Message</FieldLabel>
                    <Input id="message" />
                  </Field>
                </FieldGroup>
              </FieldGroup>
            </FieldSet>
          </FieldGroup>
        </form>
      </div>
    </div>
  );
};

export default Contact;
