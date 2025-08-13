import React from 'react';
import SectionTitle from './SectionTitle';
// Step 1: Import the new AtCoderIcon
import { LeetCodeIcon, CodeforcesIcon, CodeChefIcon, AtCoderIcon } from './Icons';

const ArrowUpRightIcon = () => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={2}
        stroke="currentColor" 
        className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
    </svg>
);


const CompetitiveProgramming = ({ profiles }) => {
    const profileList = [
        {
            name: 'LeetCode',
            url: `https://leetcode.com/${profiles.leetcode}`,
            Icon: LeetCodeIcon,
            glowColor: 'from-yellow-400/50 to-orange-500/50',
        },
        {
            name: 'Codeforces',
            url: `https://codeforces.com/profile/${profiles.codeforces}`,
            Icon: CodeforcesIcon,
            glowColor: 'from-blue-400/50 to-purple-500/50',
        },
        {
            name: 'CodeChef',
            url: `https://www.codechef.com/users/${profiles.codechef}`,
            Icon: CodeChefIcon,
            glowColor: 'from-amber-700/50 to-stone-500/50',
        },
        // Step 2: Add the AtCoder profile object to the list
        {
            name: 'AtCoder',
            url: `https://atcoder.jp/users/${profiles.atcoder}`,
            Icon: AtCoderIcon,
            glowColor: 'from-cyan-400/50 to-teal-500/50',
        },
    ];

    return (
        <section>
            <SectionTitle>Competitive Programming</SectionTitle>
            {/* The grid now adjusts for up to 4 items gracefully */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {profileList.map((profile) => (
                    <a 
                        key={profile.name}
                        href={profile.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="relative group flex flex-col justify-between p-6 h-48 rounded-lg bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 backdrop-blur-sm transition-all duration-300 hover:border-transparent hover:dark:border-transparent hover:scale-[1.02] shadow-md hover:shadow-2xl"
                    >
                        <div 
                           className={`absolute -inset-2 -z-10 rounded-xl bg-gradient-to-r ${profile.glowColor} opacity-0 blur-lg transition-all duration-300 group-hover:opacity-100`}
                           aria-hidden="true"
                        ></div>

                        <div>
                            <profile.Icon />
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white" style={{ fontFamily: "'Roboto Slab', serif" }}>
                                {profile.name}
                            </h3>
                            <p className="flex items-center text-sky-600 dark:text-sky-400 mt-2 font-semibold">
                                View Profile
                                <ArrowUpRightIcon />
                            </p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default CompetitiveProgramming;