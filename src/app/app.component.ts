import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  newsListing = NEWSLISTING;
  posts = POSTS;
  jobListings = JOBLISTINGS;
  jobOpportunities = JOBOPPORTUNITIES;
  myConnections = MYCONNECTIONS;
  suggestedConnections = SUGGESTEDCONNECTIONS;
}

const MYCONNECTIONS : User[] = [
  {  userId:"1", userName : "ASDF", school:"NYU", year:"2015", speciality: "Marketing", pictureUrl :""},
  {  userId:"1", userName : "ASDF", school:"NYU", year:"2015", speciality: "Marketing", pictureUrl :""},
  {  userId:"1", userName : "ASDF", school:"NYU", year:"2015", speciality: "Marketing", pictureUrl :""},
  {  userId:"1", userName : "ASDF", school:"NYU", year:"2015", speciality: "Marketing", pictureUrl :""},
  {  userId:"1", userName : "ASDF", school:"NYU", year:"2015", speciality: "Marketing", pictureUrl :""},
  {  userId:"1", userName : "ASDF", school:"NYU", year:"2015", speciality: "Marketing", pictureUrl :""}
]

const SUGGESTEDCONNECTIONS : User[] = [
  {  userId:"1", userName : "ASDF", school:"NYU", year:"2015", speciality: "Marketing", pictureUrl :""},
  {  userId:"1", userName : "ASDF", school:"NYU", year:"2015", speciality: "Marketing", pictureUrl :""},
  {  userId:"1", userName : "ASDF", school:"NYU", year:"2015", speciality: "Marketing", pictureUrl :""},
  {  userId:"1", userName : "ASDF", school:"NYU", year:"2015", speciality: "Marketing", pictureUrl :""},
  {  userId:"1", userName : "ASDF", school:"NYU", year:"2015", speciality: "Marketing", pictureUrl :""},
  {  userId:"1", userName : "ASDF", school:"NYU", year:"2015", speciality: "Marketing", pictureUrl :""}
]

const JOBLISTINGS : JobPosting[] = [
  { postId : "51", userId: "R2103909", title : "", postText : "som-text", address : "Church Street", city : "New York", state : "NY", images : [],
      jobUrl : "", preview : {title : "", description : "", image : "", url : ""}, tags : [], likeCount : 0, likedByMe : false, commentCount : 0},
  { postId : "51", userId: "R2103909", title : "", postText : "som-text", address : "Church Street", city : "New York", state : "NY", images : [],
      jobUrl : "", preview : {title : "", description : "", image : "", url : ""}, tags : [], likeCount : 0, likedByMe : false, commentCount : 0},
  { postId : "51", userId: "R2103909", title : "", postText : "som-text", address : "Church Street", city : "New York", state : "NY", images : [],
      jobUrl : "", preview : {title : "", description : "", image : "", url : ""}, tags : [], likeCount : 0, likedByMe : false, commentCount : 0},
  { postId : "51", userId: "R2103909", title : "", postText : "som-text", address : "Church Street", city : "New York", state : "NY", images : [],
      jobUrl : "", preview : {title : "", description : "", image : "", url : ""}, tags : [], likeCount : 0, likedByMe : false, commentCount : 0},
  { postId : "51", userId: "R2103909", title : "", postText : "som-text", address : "Church Street", city : "New York", state : "NY", images : [],
      jobUrl : "", preview : {title : "", description : "", image : "", url : ""}, tags : [], likeCount : 0, likedByMe : false, commentCount : 0}
]

const JOBOPPORTUNITIES : JobPosting[] = [
  { postId : "51", userId: "R2103909", title : "", postText : "som-text", address : "Church Street", city : "New York", state : "NY", images : [],
      jobUrl : "", preview : {title : "", description : "", image : "", url : ""}, tags : [], likeCount : 0, likedByMe : false, commentCount : 0},
  { postId : "51", userId: "R2103909", title : "", postText : "som-text", address : "Church Street", city : "New York", state : "NY", images : [],
      jobUrl : "", preview : {title : "", description : "", image : "", url : ""}, tags : [], likeCount : 0, likedByMe : false, commentCount : 0},
  { postId : "51", userId: "R2103909", title : "", postText : "som-text", address : "Church Street", city : "New York", state : "NY", images : [],
      jobUrl : "", preview : {title : "", description : "", image : "", url : ""}, tags : [], likeCount : 0, likedByMe : false, commentCount : 0},
  { postId : "51", userId: "R2103909", title : "", postText : "som-text", address : "Church Street", city : "New York", state : "NY", images : [],
      jobUrl : "", preview : {title : "", description : "", image : "", url : ""}, tags : [], likeCount : 0, likedByMe : false, commentCount : 0},
  { postId : "51", userId: "R2103909", title : "", postText : "som-text", address : "Church Street", city : "New York", state : "NY", images : [],
      jobUrl : "", preview : {title : "", description : "", image : "", url : ""}, tags : [], likeCount : 0, likedByMe : false, commentCount : 0}
]

const PREVIEW: Preview = {
  title:"test",
  description:"asd",
  image:"https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=xGiUj%2BmdPLdCh1JtHCk9uNgSTxA%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta9Er0Vinkhwfjw8177yE41y87UNCVordEGXyD3u0qYrdf3HsKsDYLeDzuVwefn4clFc7ePL6RjfoD5S1Ktvvftp03Zfhdo24ZxUBbFI8lWxI",
  url:"sadasdasd"
}

const POSTS: Post[] = [
  {  postId : "1",  userId: "111", postText : "Hi Everyone! Thanks to Marci for showing me this community of amazing Sternies! Just a few things to throw out there as an intro. I run a botique wealth management firm for Millennials, young professionals and entrepreneurs called Bone Fide Wealth, LLC (www.bonefidewealth.com). So if anyone has any questions about..",
      images : [],
      preview : null, tags : ["Luxury Marketing", "Account Development", "Job Opportunity"],
      likeCount : 4, likedByMe : true, commentCount : 12, comments : [
        {  commentId : "123", userId : "asdf", commentText: "some comment", createdDate : null},
        {  commentId : "123", userId : "asdf", commentText: "some comment", createdDate : null},
        {  commentId : "123", userId : "asdf", commentText: "some comment", createdDate : null},
        {  commentId : "123", userId : "asdf", commentText: "some comment", createdDate : null}
      ]
  },
  {  postId : "2",  userId: "112", postText : "", images : ["https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=xGiUj%2BmdPLdCh1JtHCk9uNgSTxA%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta9Er0Vinkhwfjw8177yE41y87UNCVordEGXyD3u0qYrdf3HsKsDYLeDzuVwefn4clFc7ePL6RjfoD5S1Ktvvftp03Zfhdo24ZxUBbFI8lWxI"],
      preview : null, tags : ["Luxury Marketing", "Account Development", "Job Opportunity"],
      likeCount : 5, likedByMe : false, commentCount : 1, comments : null
  },
  {  postId : "3",  userId: "113", postText : "", images : [],
      preview : PREVIEW, tags : ["Luxury Marketing", "Account Development", "Job Opportunity"],
      likeCount : 42, likedByMe : true, commentCount : 2, comments : null
  },
  {  postId : "4",  userId: "111", postText : "", images : [],
      preview : PREVIEW, tags : ["Luxury Marketing", "Account Development", "Job Opportunity"],
      likeCount : 32, likedByMe : false, commentCount : 22, comments : null
  },
  {  postId : "5",  userId: "112", postText : "", images : [],
      preview : PREVIEW, tags : ["Luxury Marketing", "Account Development", "Job Opportunity"],
      likeCount : 12, likedByMe : true, commentCount : 5, comments : null
  },
  {  postId : "6",  userId: "113", postText : "", images : [],
      preview : PREVIEW, tags : ["Luxury Marketing", "Account Development", "Job Opportunity"],
      likeCount : 18, likedByMe : true, commentCount : 17, comments : null
  }
]


const NEWSLISTING: News[] = [
  {id : "1", description : "Apple's upcoming iPhone 8 will launch in September after ...", url : "http://www.yahoo.com"},
  {id : "2", description : "10 Snacks You Can Take on the Go That Aren't Total Junk", url : "http://www.yahoo.com"},
  {id : "3", description : "Woman whose dog went missing 5 years ago is still searching for him", url : "http://www.yahoo.com"},
  {id : "4", description : "Diplomacy fails to defuse India, China border crisis: sources", url : "http://www.yahoo.com"},
  {id : "5", description : "Anyone With Excellent Credit Must Have These Cards", url : "http://www.yahoo.com"}
]

export class News{
  id: string;
  description:string;
  url:string;
}

export class JobPosting{
  postId : string;
  userId: string;
  postText : string;
  title : string;
  address : string;
  city : string;
  state : string;
  images : string[];
  jobUrl : string;
  preview : Preview;
  tags : string[];
  likeCount : number;
  likedByMe : boolean;
  commentCount : number;
}

export class Post {
  postId : string;
  userId: string;
  postText : string;
  images : string[];
  preview : Preview;
  tags : string[];
  likeCount : number;
  likedByMe : boolean;
  commentCount : number;
  comments : Comment[];
}

export class Comment{
  commentId : string;
  userId : string;
  commentText: string;
  createdDate : Date;
}

export class User{
  userId:string;
  userName : string;
  school:string;
  year:string;
  speciality: string;
  pictureUrl :string;
}

export class Preview{
  title:string;
  description:string;
  image:string;
  url:string;
}
