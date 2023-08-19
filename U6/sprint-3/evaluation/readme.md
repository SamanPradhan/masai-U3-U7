general:

The overall system will consist of two main types as mentioned in the problem, i.e. drivers and passengers.
Drivers wil be albe to accept, reject and confirm the ride requests and passengers will be able to book rides. also there will be review options and payment functionality for passengers.

different parts of the system will be like,

Parts of the Design:-
APIs:-

1. User APIs:
   endpoints: /users
   this endpoint should handle user registration, login, logout, generating access token, etc.
2. Ride APIs:
   endpoints: /rides[label](../../sprint-4/evaluation/masai-cp-problems-1707-1876-yURMPv-93cef93e38d160ab12989786314655e811095168)
   this endpoint sould handle accepting, rejecting, the ride bookings and also user can see ride histories.
3. Reviews APIs:
   endpoint: /reviews
   this end point should handle giving reviews by the passengers to drivers
4. Payments APIs:
   endpoint: /payment
   this end poing should handle payment options

Frontend:- for the frontend part we have to implement certain functionalities

1. Async js and using the load balancer
2. we have to optimize the frontend for both driver and passenger side so that both works seemlessly
3. other regular functionalities that we use in the front end must be implemented

Backend:-

1. So that our backend works very smoothly we can add more servers to it later, we can use autoscalling to adjust the servers based on needs.
2. we can implement monitoring and logging to our system so that we can know about how our system is performing in any point of time
3. We can give access to backend using AWS or google servies from multiple zones so that our backend runs smoothly from anywhere

Database:-

1. database sharding techniques can be used
2. caching can be used
3. database optimization techniques like aggregation and indexing can be used
