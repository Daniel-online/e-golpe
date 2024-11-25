import postImage1 from "./../assets/post/bobtail.webp";
import postImage2 from "./../assets/post/bulldog.webp";
import postImage3 from "./../assets/post/dogue-de-bordeaux.webp";
import postImage4 from "./../assets/post/poodle.webp";

import userImage1 from "./../assets/users/1.png";
import userImage2 from "./../assets/users/2.png";
import userImage3 from "./../assets/users/3.png";
import userImage4 from "./../assets/users/4.png";

export const Array = [
  {
    id: 1,
    desc: "This is a sample post description.",
    photo: postImage1,
    date: "30 minutes ago",
    userId: 101,
    upVote: 15,
    comment: 3,
  },
  {
    id: 2,
    desc: "Another post description here.",
    photo: postImage2,
    date: "3 days ago",
    userId: 102,
    upVote: 20,
    comment: 5,
  },
  {
    id: 3,
    photo: postImage3,
    date: "12 hours ago",
    userId: 103,
    upVote: 84,
    comment: 3,
  },
  {
    id: 4,
    desc: "Another post description here.",
    photo: postImage4,
    date: "7 days ago",
    userId: 104,
    upVote: 234,
    comment: 5,
  },
];

export const Users = [
  {
    id: 101,
    profilePicture: userImage1,
    username: "Daniel freire",
  },
  {
    id: 102,
    profilePicture: userImage2,
    username: "Daniel Cervantes",
  },
  {
    id: 103,
    profilePicture: userImage3,
    username: "Daniel 2: O retorno",
  },
  {
    id: 104,
    profilePicture: userImage4,
    username: "Mary ",
  },
];

export const Friends = [
  {
    id: 101,
    profilePicture: userImage1,
    username: "Kwaku Sam",
  },
  {
    id: 102,
    profilePicture: userImage2,
    username: "Ama Serwaa",
  },
  {
    id: 103,
    profilePicture: userImage3,
    username: "Samuel Asante",
  },
  {
    id: 104,
    profilePicture: userImage4,
    username: "Derrick Kello",
  },
  {
    id: 105,
    profilePicture: userImage1,
    username: "Henry Crentsil",
  },
  {
    id: 106,
    profilePicture: userImage2,
    username: "Richard Arthur",
  },
  {
    id: 107,
    profilePicture: userImage3,
    username: "Emmanuel Boateng",
  },
  {
    id: 108,
    profilePicture: userImage4,
    username: "Denis Owusu",
  },
];