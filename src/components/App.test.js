import React from "react";
import { shallow } from "enzyme";
import { App } from "./App";
import { categories } from "../data/fixtures";

const props = { categories };

describe("App", () => {
  const app = shallow(<App {...props} />);

  it("renders the title", () => {
    expect(app.find("h2").text()).toEqual("JEAPORDY!");
  });

  it("creates the correct number of Links", () => {
    expect(app.find("Link").length).toEqual(categories.length);
  });

  it("titles the Links corectly", () => {
    expect(
      app.find("Link h4").forEach((linkTitle, index) => {
        expect(linkTitle.text()).toEqual(categories[index].title);
      })
    );
  });
});
