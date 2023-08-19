## React routing Car Rental

## Submission Instructions [Please note]

## Maximum Marks - 10

- The Submission should not contain spaces, for example,/RCT-101 folder/eval will not work
- Do not push node_modules and package-lock.json to GitHub

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Checking the api request on component mount - 1 mark
 ✅ Able to show the api data on the dom - 1 mark
 ✅ Check the UI of the Cards showing the car's data - 1 mark
 ✅ Check if creating a new car is working or not - 1 mark
 ✅ Check if booking a new car is working or not - 2 mark
 ✅ Check if Booked Cars are also not showing in the list - 1 mark
 ✅ Check if a Car's pickup date is over it's visible or not - 2 mark
```

## Installation

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- please make sure you do not push package-lock.json

- Download and unzip the boilerplate file and then copy the "**contents**" of the unzipped file in the Masai Folder.
- Navigate to the Masai Folder, in VS Code.
- Run the following commands inside,
- `npm install --engine-strict`
- `npm start`
- `npm run server` -> to start the JSON-server
- **_Note_**:

1. Make sure that the JSON server is up and running at port 8080
2. Create a .env file. Include `REACT_APP_JSON_SERVER_PORT=8080` in it
3. You need to restart the react server once the env file is updated.
4. Use `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}` as the JSON-server URL

### Testing Objectives

- Ability to use React and JSON-SERVER to build a full-stack CRUD application.
- Able to use the react concepts to build an application

### Pages:-

- Home
- Error
- Add
- Book

### JSON Data:

- db.json file is included in the boilerplate zip file, with the initial cars data.
  The data will look like this:-

```
{
  "id": "5UXFG8C50EL930092",
  "model": "Yukon XL 1500",
  "brand": "GMC",
  "year": 2007,
  "image": "https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-06-06/car4_238819.jpeg",
  "booking": null
}
```

### Features to build:

- In this app, there is a Navbar component already given in the template
- No need to build it.

#### Home Page(Home.jsx):-

- On this page, there will be a div with an id `car-container`
- Make an API request to the JSON server and fetch all the car's data.
- Loop over the data and show them in the form of small cards
- The structure of each card is given below

```
<div>
  <img src={image} />
  <h2>{brand}</h2>
  <p>{model}</p>
  <p>Year: {year}</p>
  <button>
    Book Now
  </button>
</div>
```

- Make sure you show only those cars on this page that are currently not booked.
  ![image](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-06-08/Screenshot%202023-06-08%20at%203.54.35%20PM_695285.png)

#### Add Page(Add.jsx):-

- On this page there will be a form with the following input fields:-

  1.  input with id:- model
  2.  input with id:- brand
  3.  input with id:- year
  4.  input with id:- image
  5.  input type submit

- When a user fills all the input fields and submits the form a new card should be added to the database
  ![image](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-06-11/Screenshot%202023-06-11%20at%2010.10.41%20AM_899883.png)

#### Book Page(Book.jsx):-

- When someone clicks on the button of the card on the home page, that person should be redirected to the Book Page. You can use URL params of `react-router-dom` for this.

- On this page, there will be a form with the following input fields:-

  1. input with id:- name
  2. input with id:- email
  3. input with id:- phone
  4. input with id:- pickupDate
  5. input with id:- returnDate

- When the user submits the form update the `booking` key of the car to the data of the form
  ![image](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-06-08/Screenshot%202023-06-08%20at%203.56.12%20PM_586574.png)

#### Showing only now-booked cars:-

- If a car's booked key is null in that case show that car
- if a car's returnDate is >= today's date, then show that particular car

**_ Explore more about the Date method in Javascript _**

### General Instructions:

- Do not remove `data-testid=’xxx’` from anywhere inside the code. They are the test inputs, and removing them may lead to low scores.
- Do not change the current folder structure, and names of components provided.
- Only use the data present in the db.json file, and do not modify the data in the JSON file.

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
