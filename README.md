# Nfieldtool Online
Home of the online version of Nfieldtool

## History  
Nfield environment provides several functions through its management UI (aka nfield manager). However, a user has to program against its
API (aka nfield api) to access all possible functions. For a user who doesn't have programming skills but who needs to access those
functions it is a problem.  

For this very specific reason, a group of colleagues created a useful tool in Excel (a vb macro app.) which enables access
to the rest of the functions via Nfield api.  

## Goal  
It is to replicate the functionalities serviced through the Nfieldtool on web via competent technology so that maintanence and testing
would improve.  

## Personal Goals  
I would like to improve my knowledge and skills over web development technologies and I find this project a good fit.

## Project Needs  
 - We will need a frontend web app (UI) to demonstrate the access to the
   features which currently only exists on Nfieldtool.
 - We will need to use NField API to operate the functionality.
 - We will need an in between server (aka Middleman) to let webapp(UI)
   and NfieldAPI talk to eachother. Otherwise it is not possible since
   browsers block communication due to CrossOriginResourceSharing rules
   set on Nfield side.

## Technology  

We will use a javascript framework (TBD) to create the UI webapp.
We will use node.js for Middleman server.

## Installation  
Please see respective package content for module installation requirements.  

## Functionality  
- Sign in  
- Get survey list  

