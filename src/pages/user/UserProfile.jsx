import React from "react";

function UserProfile() {
  // Mock user data to populate the profile page
  const user = {
    username: "johndoe",
    fullName: "John Doe",
    bio: "Photographer 📸 | Traveler ✈️ | Coffee Lover ☕️\nCreating visual stories one click at a time.",
    website: "johndoe.com",
    profilePic: "https://placehold.co/150x150/EFEFEF/333333?text=JD",
    stats: {
      posts: 128,
      followers: 4321,
      following: 567,
    },
    highlights: [
      {
        id: 1,
        title: "Travel",
        cover: "https://placehold.co/80x80/FBBF24/FFFFFF?text=✈️",
      },
      {
        id: 2,
        title: "Food",
        cover: "https://placehold.co/80x80/F87171/FFFFFF?text=🍕",
      },
      {
        id: 3,
        title: "Projects",
        cover: "https://placehold.co/80x80/60A5FA/FFFFFF?text=💻",
      },
      {
        id: 4,
        title: "Friends",
        cover: "https://placehold.co/80x80/34D399/FFFFFF?text=😊",
      },
      {
        id: 5,
        title: "Gym",
        cover: "https://placehold.co/80x80/A78BFA/FFFFFF?text=💪",
      },
      {
        id: 6,
        title: "Nature",
        cover: "https://placehold.co/80x80/22C55E/FFFFFF?text=🌲",
      },
    ],
    posts: [
      // Generate 12 placeholder posts for the grid
      ...Array.from({ length: 12 }, (_, i) => ({
        id: i + 1,
        imageUrl: `https://placehold.co/500x500/E5E7EB/4B5563?text=Post+${
          i + 1
        }`,
        likes: Math.floor(Math.random() * 2000),
        comments: Math.floor(Math.random() * 500),
      })),
    ],
  };

  // State to manage which content tab is currently active
  const [activeTab, setActiveTab] = React.useState("posts");

  // --- SVG Icons --- //
  // These are functional components that render SVG icons for the UI.
  const SettingsIcon = () => (
    <svg
      className="w-6 h-6 text-gray-800"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
  const GridIcon = () => (
    <svg
      aria-label="Posts"
      className="w-6 h-6"
      fill="currentColor"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
    >
      <rect
        fill="none"
        height="18"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        width="18"
        x="3"
        y="3"
      ></rect>
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        x1="9.015"
        x2="9.015"
        y1="3"
        y2="21"
      ></line>
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        x1="14.985"
        x2="14.985"
        y1="3"
        y2="21"
      ></line>
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        x1="21"
        x2="3"
        y1="9.015"
        y2="9.015"
      ></line>
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        x1="21"
        x2="3"
        y1="14.985"
        y2="14.985"
      ></line>
    </svg>
  );
  const ReelsIcon = () => (
    <svg
      aria-label="Reels"
      className="w-6 h-6"
      fill="currentColor"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
    >
      <polygon
        fill="none"
        points="20 21 12 13.44 4 21 4 3 20 3 20 21"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      ></polygon>
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        x1="12"
        x2="12"
        y1="13.44"
        y2="3"
      ></line>
    </svg>
  );
  const TaggedIcon = () => (
    <svg
      aria-label="Tagged"
      className="w-6 h-6"
      fill="currentColor"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
    >
      <path
        d="M10.201 3.797L12 1.998l1.799 1.799a1.79 1.79 0 001.272.529h.528a2.112 2.112 0 012.112 2.112v.528c0 .467.19.92.529 1.272l1.799 1.799-1.799 1.799a1.79 1.79 0 00-.529 1.272v.528a2.112 2.112 0 01-2.112 2.112h-.528a1.79 1.79 0 00-1.272.529L12 22.002l-1.799-1.799a1.79 1.79 0 00-1.272-.529h-.528A2.112 2.112 0 016.288 17.55v-.528a1.79 1.79 0 00-.529-1.272L3.96 13.95l1.799-1.799a1.79 1.79 0 00.529-1.272v-.528a2.112 2.112 0 012.112-2.112h.528A1.79 1.79 0 0010.201 3.797z"
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="2"
      ></path>
      <path
        d="M15.596 8.404a3.801 3.801 0 11-3.802-3.802 3.801 3.801 0 013.802 3.802z"
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="2"
      ></path>
    </svg>
  );

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
      <main className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8">
        {/* -- Profile Header -- */}
        <header className="flex flex-col sm:flex-row items-center sm:items-start mb-8">
          {/* Profile Picture */}
          <div className="w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0">
            <img
              className="w-full h-full rounded-full object-cover shadow-md"
              src={user.profilePic}
              alt={user.fullName}
            />
          </div>

          {/* Profile Info */}
          <section className="mt-4 sm:mt-0 sm:ml-10 md:ml-16 w-full">
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
              <h2 className="text-2xl font-light text-center sm:text-left">
                {user.username}
              </h2>
              <div className="flex justify-center sm:justify-start items-center gap-2 mt-2 sm:mt-0">
                <button className="bg-gray-200 hover:bg-gray-300 text-sm font-semibold py-1.5 px-4 rounded-lg">
                  Edit profile
                </button>
                <button className="bg-gray-200 hover:bg-gray-300 text-sm font-semibold py-1.5 px-4 rounded-lg">
                  View archive
                </button>
                <button className="p-1">
                  <SettingsIcon />
                </button>
              </div>
            </div>

            {/* Stats for larger screens */}
            <div className="hidden sm:flex justify-start space-x-8 my-5">
              <div>
                <span className="font-semibold">{user.stats.posts}</span> posts
              </div>
              <div>
                <span className="font-semibold">{user.stats.followers}</span>{" "}
                followers
              </div>
              <div>
                <span className="font-semibold">{user.stats.following}</span>{" "}
                following
              </div>
            </div>

            {/* Bio */}
            <div className="text-center sm:text-left mt-4 sm:mt-0">
              <p className="font-semibold">{user.fullName}</p>
              <p className="text-gray-700 whitespace-pre-line">{user.bio}</p>
              <a
                href={`https://${user.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-900 font-semibold text-sm"
              >
                {user.website}
              </a>
            </div>
          </section>
        </header>

        {/* Stats for smaller screens */}
        <div className="flex sm:hidden justify-around border-t border-b border-gray-300 py-2 mb-6">
          <div className="text-center">
            <span className="font-semibold block">{user.stats.posts}</span>
            <span className="text-gray-500">posts</span>
          </div>
          <div className="text-center">
            <span className="font-semibold block">{user.stats.followers}</span>
            <span className="text-gray-500">followers</span>
          </div>
          <div className="text-center">
            <span className="font-semibold block">{user.stats.following}</span>
            <span className="text-gray-500">following</span>
          </div>
        </div>

        {/* -- Story Highlights -- */}
        <div className="flex items-center space-x-4 md:space-x-6 overflow-x-auto pb-4 mb-8">
          {user.highlights.map((highlight) => (
            <div key={highlight.id} className="text-center flex-shrink-0">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full p-0.5 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
                <div className="bg-white p-0.5 rounded-full">
                  <img
                    className="w-full h-full rounded-full object-cover"
                    src={highlight.cover}
                    alt={highlight.title}
                  />
                </div>
              </div>
              <p className="text-xs mt-1.5">{highlight.title}</p>
            </div>
          ))}
        </div>

        {/* -- Profile Content Tabs -- */}
        <div className="border-t border-gray-300">
          <div className="flex justify-center items-center -mt-px space-x-12">
            <button
              className={`flex items-center gap-2 py-3 text-xs font-semibold uppercase tracking-wider ${
                activeTab === "posts"
                  ? "text-gray-800 border-t border-gray-800"
                  : "text-gray-400"
              }`}
              onClick={() => setActiveTab("posts")}
            >
              <GridIcon /> Posts
            </button>
            <button
              className={`flex items-center gap-2 py-3 text-xs font-semibold uppercase tracking-wider ${
                activeTab === "reels"
                  ? "text-gray-800 border-t border-gray-800"
                  : "text-gray-400"
              }`}
              onClick={() => setActiveTab("reels")}
            >
              <ReelsIcon /> Reels
            </button>
            <button
              className={`flex items-center gap-2 py-3 text-xs font-semibold uppercase tracking-wider ${
                activeTab === "tagged"
                  ? "text-gray-800 border-t border-gray-800"
                  : "text-gray-400"
              }`}
              onClick={() => setActiveTab("tagged")}
            >
              <TaggedIcon /> Tagged
            </button>
          </div>
        </div>

        {/* -- Content Display -- */}
        <div>
          {activeTab === "posts" && (
            <div className="grid grid-cols-3 gap-1 sm:gap-4 mt-4">
              {user.posts.map((post) => (
                <div
                  key={post.id}
                  className="aspect-square bg-gray-200 relative group cursor-pointer"
                >
                  <img
                    src={post.imageUrl}
                    alt={`Post ${post.id}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <div className="text-white opacity-0 group-hover:opacity-100 flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <svg
                          className="w-5 h-5"
                          fill="white"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                        </svg>
                        <span className="font-semibold">{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg
                          className="w-5 h-5"
                          fill="white"
                          viewBox="0 0 24 24"
                          transform="scale(-1, 1)"
                        >
                          <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z"></path>
                        </svg>
                        <span className="font-semibold">{post.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {activeTab !== "posts" && (
            <div className="text-center py-20 text-gray-500">
              <h3 className="text-2xl font-bold">Share Photos</h3>
              <p className="mt-2">
                When you share photos, they will appear on your profile.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default UserProfile;
