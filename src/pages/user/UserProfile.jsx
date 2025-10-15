import React from 'react';

// --- SVG Icons (to keep it self-contained) ---

const GlobeIcon = () => (
  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 009-9m-9 9a9 9 0 00-9-9"></path></svg>
);

const LikeIcon = () => (
    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 10v12" /><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a2 2 0 0 1 1.79 1.11L15 5.88Z" /></svg>
);

const CommentIcon = () => (
    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
);

const ShareIcon = () => (
    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><polyline points="16 6 12 2 8 6" /><line x1="12" x2="12" y1="2" y2="15" /></svg>
);

const MoreHorizIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
);

// --- Reusable Components ---

const ProfileTab = ({ label, isActive, count }) => (
  <button className={`py-3 px-4 font-semibold text-sm rounded-lg ${isActive ? 'text-blue-600 bg-blue-100' : 'text-gray-600 hover:bg-gray-200'}`}>
    {label} {count && <span className="text-gray-500 font-normal">{count}</span>}
  </button>
);

const InfoItem = ({ icon, text }) => (
    <div className="flex items-center space-x-2 text-gray-700">
        {icon}
        <span className="text-sm">{text}</span>
    </div>
);

const Post = ({ user, time, content, image, likes, comments }) => (
    <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="flex items-start space-x-3 mb-3">
            <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full" />
            <div>
                <p className="font-semibold text-gray-800">{user.name}</p>
                <div className="flex items-center space-x-1 text-xs text-gray-500">
                    <span>{time}</span>
                    <span>·</span>
                    <GlobeIcon />
                </div>
            </div>
        </div>
        <p className="text-gray-800 text-sm mb-3">{content}</p>
        {image && <img src={image} alt="Post content" className="rounded-lg w-full mb-3" />}
        <div className="flex justify-between items-center text-xs text-gray-500 mb-2">
            <div>{likes} Likes</div>
            <div>{comments} Comments</div>
        </div>
        <hr/>
        <div className="flex justify-around pt-2 text-gray-600 font-semibold text-sm">
            <button className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-lg w-full justify-center">
                <LikeIcon /> <span>Like</span>
            </button>
            <button className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-lg w-full justify-center">
                <CommentIcon /> <span>Comment</span>
            </button>
            <button className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-lg w-full justify-center">
                <ShareIcon /> <span>Share</span>
            </button>
        </div>
    </div>
);


function UserProfile() {
  // Mock data for the profile
  const user = {
    name: 'Ada Lovelace',
    avatar: 'https://placehold.co/100x100/E2E8F0/4A5568?text=Ada',
    coverPhoto: 'https://placehold.co/1200x400/BFDBFE/1E3A8A?text=Scenic+View',
    friendsCount: 1240,
    intro: {
        work: "Computer Scientist at Babbage Labs",
        education: "Studied at University of London",
        location: "Lives in London, UK",
        from: "From London, UK",
    },
    photos: [
        'https://placehold.co/300x300/A5B4FC/1E293B',
        'https://placehold.co/300x300/C7D2FE/1E293B',
        'https://placehold.co/300x300/A5B4FC/1E293B',
        'https://placehold.co/300x300/C7D2FE/1E293B',
        'https://placehold.co/300x300/A5B4FC/1E293B',
        'https://placehold.co/300x300/C7D2FE/1E293B',
    ],
    posts: [
        {
            id: 1,
            time: "8h",
            content: "Excited to share my latest work on the Analytical Engine. The potential for this machine is boundless! It can weave algebraic patterns just as the Jacquard loom weaves flowers and leaves. #computing #history #womenintech",
            image: "https://placehold.co/600x400/C7D2FE/1E293B?text=Algorithm+Draft",
            likes: 256,
            comments: 48
        },
        {
            id: 2,
            time: "2d",
            content: "A beautiful day for a walk and some deep thinking. Nature is often the best inspiration for mathematical concepts.",
            image: null,
            likes: 128,
            comments: 22
        }
    ]
  };

  return (
    <div className="bg-gray-100 font-sans min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* --- Profile Header --- */}
        <div className="bg-white shadow-sm rounded-b-lg">
          {/* Cover Photo */}
          <div className="relative">
            <img 
              src={user.coverPhoto}
              alt="Cover Photo" 
              className="w-full h-48 md:h-72 lg:h-96 object-cover rounded-t-lg"
            />
            <div className="absolute bottom-4 right-4">
              <button className="bg-white/80 hover:bg-white text-gray-800 font-semibold py-2 px-3 rounded-lg text-sm flex items-center space-x-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"></path></svg>
                <span>Edit cover photo</span>
              </button>
            </div>
          </div>
          
          {/* Profile Info */}
          <div className="p-4 md:flex md:items-end md:space-x-4">
            <div className="relative md:static -mt-20 md:mt-0">
                <img 
                  src={user.avatar} 
                  alt="Profile" 
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white object-cover"
                />
            </div>
            <div className="flex-grow mt-2 md:mt-0">
                <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
                <p className="text-gray-500 font-semibold">{user.friendsCount.toLocaleString()} friends</p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-2">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                    <span>Add to story</span>
                </button>
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd"></path></svg>
                    <span>Edit profile</span>
                </button>
            </div>
          </div>
          
          <hr className="mx-4"/>
          
          {/* Profile Navigation */}
          <nav className="p-2 flex flex-wrap items-center justify-between">
            <div className="flex items-center space-x-2">
              <ProfileTab label="Posts" isActive={true} />
              <ProfileTab label="About" />
              {/* <ProfileTab label="Friends" count={user.friendsCount.toLocaleString()} /> */}
              {/* <ProfileTab label="Photos" /> */}
              {/* <ProfileTab label="Videos" /> */}
              <ProfileTab label="More" />
            </div>
            <button className="bg-gray-200 hover:bg-gray-300 p-2 rounded-lg">
                <MoreHorizIcon />
            </button>
          </nav>
        </div>
        
        {/* --- Profile Body --- */}
        <div className="p-4 grid grid-cols-1 lg:grid-cols-12 gap-4">
          
          {/* Left Column (Intro, Photos, etc.) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
                <h2 className="font-bold text-xl text-gray-800 mb-2">Intro</h2>
                <div className="space-y-3">
                    <InfoItem icon={<svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v5a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2zm4-1a1 1 0 00-1 1v1h2V6a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>} text={user.intro.work} />
                    <InfoItem icon={<svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3.5a1 1 0 00.002 1.84L10 10l7.394-2.58a1 1 0 00.002-1.84l-7-3.5z"></path><path d="M10 12l-7.394-2.58a1 1 0 00-.002 1.84L10 14.83l7.394-2.57a1 1 0 00-.002-1.84L10 12z"></path><path d="M10 16l-7.394-2.58a1 1 0 00-.002 1.84L10 18.83l7.394-2.57a1 1 0 00-.002-1.84L10 16z"></path></svg>} text={user.intro.education} />
                    <InfoItem icon={<svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>} text={user.intro.location} />
                </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-2">
                    <h2 className="font-bold text-xl text-gray-800">Photos</h2>
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-semibold">See all photos</button>
                </div>
                <div className="grid grid-cols-3 gap-2">
                    {user.photos.map((photo, index) => (
                        <img key={index} src={photo} alt={`Photo ${index+1}`} className="w-full h-24 object-cover rounded-lg" />
                    ))}
                </div>
            </div>
          </div>
          
          {/* Right Column (Posts) */}
          <div className="lg:col-span-7 space-y-4">
              {/* Create Post */}
              <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center space-x-3 border-b pb-3 mb-3">
                      <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full" />
                      <button className="bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full w-full text-left px-4 py-2 text-sm">
                          What's on your mind, {user.name.split(' ')[0]}?
                      </button>
                  </div>
                  <div className="flex justify-around">
                      <button className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-lg text-sm font-semibold text-gray-600">
                          <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"></path></svg>
                          <span>Photo/video</span>
                      </button>
                      <button className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-lg text-sm font-semibold text-gray-600">
                          <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M8 9a3 3 0 100-6 3 3 0 000 6z"></path><path fillRule="evenodd" d="M8 1a7 7 0 100 14A7 7 0 008 1zM8 15a7 7 0 005.93-3.355A3.987 3.987 0 0011 10.53V12a1 1 0 11-2 0v-1.47a4 4 0 00-4 0V12a1 1 0 11-2 0v-1.47A4 4 0 001 12.016 7 7 0 008 15z" clipRule="evenodd"></path></svg>
                          <span>Tag friends</span>
                      </button>
                  </div>
              </div>

              {/* User Posts */}
              {user.posts.map(post => (
                  <Post 
                      key={post.id}
                      user={user}
                      time={post.time}
                      content={post.content}
                      image={post.image}
                      likes={post.likes}
                      comments={post.comments}
                  />
              ))}
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default UserProfile;
