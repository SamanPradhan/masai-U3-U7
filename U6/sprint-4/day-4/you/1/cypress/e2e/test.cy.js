import data from "../../submissionData.json"; // do not create this file
import { cars } from "../fixtures/data.json";
data.forEach(({ submission_link: url, id, json_server_link: server_url }) => {
  describe("React Routing Car Rental Testing", function () {
    let acc_score = 1;
    beforeEach(() => {
      Cypress.on("uncaught:exception", (err, runnable) => {
        // prevent the error from failing the test
        return false;
      });
    });
    it("Checking the api request on component mount", () => {
      cy.intercept("**/cars", cars).as("apiRequest");
      cy.visit(url);
      cy.wait("@apiRequest");
      cy.then(() => (acc_score += 1));
    }); //1
    it("Able to show the api data on the dom", () => {
      cy.get("#car-container").children().should("have.length", cars.length);
      cy.then(() => (acc_score += 1));
    }); //1
    it("Check the UI of the Cards showing the car's data", () => {
      cy.get("#car-container > div img");
      cy.get("#car-container > div h2");
      cy.get("#car-container > div p");
      cy.get("#car-container > div p");
      cy.get("#car-container > div button");

      cars.forEach(({ brand, model, year }, index) => {
        cy.get(`#car-container > div:nth-child(${index + 1}) h2`).contains(
          brand
        );
        cy.get(`#car-container > div:nth-child(${index + 1}) p`).contains(
          model
        );
        cy.get(`#car-container > div:nth-child(${index + 1}) p`).contains(year);
      });
      cy.then(() => (acc_score += 1));
    }); // 1
    it("Check if creating a new car is working or not", () => {
      cy.intercept("POST", "**/cars", cars).as("create");
      cy.visit(`${url}/add`);
      cy.get("form #model").clear().type("b");
      cy.get("form #brand").clear().type("p");
      cy.get("form #year").clear().type(1999);
      cy.get("form #image")
        .clear()
        .type(
          "https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-06-06/car1_432155.jpeg"
        );
      cy.get("form").submit();
      cy.wait("@create");
      cy.then(() => (acc_score += 1));
    }); //1
    it("Check if booking a new car is working or not", () => {
      cy.intercept("PUT", "**/cars/**").as("book");
      cy.intercept("**/cars", cars).as("apiRequest");
      cy.visit(url);
      cy.wait("@apiRequest");
      cy.get(`#car-container>div:nth-child(1) button`).click();
      cy.get("form #name").clear().type("s");
      cy.get("form #email").clear().type("s@gmail.com");
      cy.get("form #phone").clear().type("9999999999");
      cy.get("form #pickupDate").clear().type("2023-07-12");
      cy.get("form #returnDate").clear().type("2100-06-12");
      cy.get("form").submit();
      cy.wait("@book");
      cy.then(() => (acc_score += 2));
    }); //2
    it("Check if Booked Cars are also not showing in the list", () => {
      const newData = [
        ...cars,
        {
          id: "WVWAA7AJ7BW1837371111",
          model: "ironman",
          brand: "batman",
          year: 1999,
          image:
            "https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-06-06/car1_432155.jpeg",
          booking: {
            name: "s",
            email: "s@gmail.com",
            phone: "999999999",
            pickupDate: "2023-06-06",
            returnDate: "2223-07-01",
          },
        },
      ];
      cy.intercept("**/cars", newData).as("getCars");
      cy.visit(url);
      cy.wait("@getCars");
      cars.forEach(({ brand, model, year }, index) => {
        cy.get(`#car-container > div:nth-child(${index + 1}) h2`).contains(
          brand
        );
        cy.get(`#car-container > div:nth-child(${index + 1}) p`).contains(
          model
        );
        cy.get(`#car-container > div:nth-child(${index + 1}) p`).contains(year);
      });
      cy.then(() => (acc_score += 1));
    }); //1

    it("Check if a Car's pickup date is over it's visible or not", () => {
      const newData = [
        ...cars,
        {
          id: "WVWAA7AJ7BW1837371111",
          model: "ironman",
          brand: "batman",
          year: 1999,
          image:
            "https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-06-06/car1_432155.jpeg",
          booking: {
            name: "s",
            email: "s@gmail.com",
            phone: "999999999",
            pickupDate: "2000-06-06",
            returnDate: "2000-06-01",
          },
        },
      ];
      cy.intercept("**/cars", newData).as("getCars");
      cy.visit(url);
      cy.wait("@getCars");
      newData.forEach(({ brand, model, year }, index) => {
        cy.get(`#car-container > div:nth-child(${index + 1}) h2`).contains(
          brand
        );
        cy.get(`#car-container > div:nth-child(${index + 1}) p`).contains(
          model
        );
        cy.get(`#car-container > div:nth-child(${index + 1}) p`).contains(year);
      });
      cy.then(() => (acc_score += 2));
    });
    after(() => {
      let result = {
        id,
        marks: Math.ceil(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
    });
  }); //2
});
