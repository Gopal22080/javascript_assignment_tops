// Q10/Q11 - find() first video with more than 1 million views
const videos = [
  { title: "JavaScript Basics", views: 500000 },
  { title: "React Tutorial", views: 1500000 },
  { title: "Node.js Course", views: 2500000 }
];

const popularVideo = videos.find((video) => video.views > 1000000);

console.log(popularVideo);
