
import React, { useState } from "react";

const TopicSearch = () => {
  const [query, setQuery] = useState("");
  const [hoveredId, setHoveredId] = useState(null);

  const topics = [
    { id: 1, name: "SQL", category: "DBMS", icon: "🗄️", color: "from-blue-500 to-cyan-500" },
    { id: 2, name: "Process Management", category: "Operating System", icon: "⚙️", color: "from-green-500 to-emerald-500" },
    { id: 3, name: "Calculus", category: "Mathematics", icon: "📐", color: "from-purple-500 to-pink-500" },
    { id: 4, name: "Flip Flop", category: "Digital Logic", icon: "🔄", color: "from-red-500 to-orange-500" },
    { id: 5, name: "Data Structures", category: "Computer Science", icon: "💻", color: "from-indigo-500 to-blue-500" },
    { id: 6, name: "Machine Learning", category: "Artificial Intelligence", icon: "🤖", color: "from-yellow-500 to-orange-500" }
  ];

  const filteredTopics = topics.filter(topic =>
    topic.name.toLowerCase().includes(query.toLowerCase()) ||
    topic.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Decorative elements */}
      <div className="fixed top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>
      <div className="fixed bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>

      <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-3xl sm:text-4xl">✨</span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Topic Explorer
              </h1>
              <span className="text-3xl sm:text-4xl">✨</span>
            </div>
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg">Discover and explore topics across multiple disciplines</p>
          </div>

          {/* Search Box */}
          <div className="mb-8 sm:mb-12">
            <div className="relative">
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl">🔍</span>
              <input
                type="text"
                placeholder="Search topics or categories..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-12 pr-6 py-3 sm:py-4 text-base sm:text-lg bg-slate-700 border-2 border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-all duration-300"
              />
            </div>
          </div>

          {/* Topics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredTopics.length > 0 ? (
              filteredTopics.map(topic => (
                <div
                  key={topic.id}
                  onMouseEnter={() => setHoveredId(topic.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="group relative bg-slate-700 rounded-xl overflow-hidden border border-slate-600 hover:border-purple-500 cursor-pointer transition-all duration-300 transform hover:scale-105"
                >
                  {/* Gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${topic.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                  {/* Content */}
                  <div className="relative p-5 sm:p-6">
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-4xl sm:text-5xl">{topic.icon}</span>
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${topic.color}`}></div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300 line-clamp-2">
                      {topic.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-300 mb-4 flex items-center gap-2">
                      <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r ${topic.color}`}></span>
                      {topic.category}
                    </p>

                    {/* Hover effect button */}
                    <button className="w-full py-2 px-3 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-2 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full">
                <div className="text-center py-12 bg-slate-700 rounded-xl border-2 border-dashed border-slate-600">
                  <p className="text-gray-300 text-base sm:text-lg font-medium mb-2">No topics found</p>
                  <p className="text-gray-400 text-xs sm:text-sm">Try searching with different keywords</p>
                </div>
              </div>
            )}
          </div>

          {/* Results counter */}
          <div className="text-center mt-8 sm:mt-12">
            <p className="text-gray-400 text-xs sm:text-sm">
              Showing <span className="text-purple-400 font-semibold">{filteredTopics.length}</span> of <span className="text-purple-400 font-semibold">{topics.length}</span> topics
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicSearch;
