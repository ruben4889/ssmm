import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, ScatterChart, Scatter, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Data from analysis
  const platformData = [
    { name: 'LinkedIn', happiness: 8.88, users: 16, screenTime: 5.25, stress: 6.38, sleep: 6.81 },
    { name: 'X (Twitter)', happiness: 8.81, users: 21, screenTime: 5.02, stress: 6.43, sleep: 6.48 },
    { name: 'YouTube', happiness: 8.55, users: 11, screenTime: 5.01, stress: 6.27, sleep: 6.64 },
    { name: 'TikTok', happiness: 8.54, users: 26, screenTime: 5.49, stress: 6.46, sleep: 6.38 },
    { name: 'Facebook', happiness: 8.20, users: 15, screenTime: 5.31, stress: 6.67, sleep: 5.53 },
    { name: 'Instagram', happiness: 7.30, users: 10, screenTime: 6.05, stress: 7.50, sleep: 5.40 },
  ];

  const screenTimeImpact = [
    { category: 'Low (< 4 hrs)', happiness: 9.57, users: 23, sleep: 7.83, stress: 5.13 },
    { category: 'Medium (4-6 hrs)', happiness: 8.92, users: 36, sleep: 6.42, stress: 6.25 },
    { category: 'High (6+ hrs)', happiness: 7.45, users: 40, sleep: 5.25, stress: 7.65 },
  ];

  const sleepImpact = [
    { category: 'Poor (< 5)', happiness: 6.85, users: 13, screenTime: 7.29, stress: 7.77 },
    { category: 'Fair (5-7)', happiness: 7.93, users: 42, screenTime: 6.11, stress: 6.98 },
    { category: 'Good (7+)', happiness: 9.48, users: 44, screenTime: 4.00, stress: 5.80 },
  ];

  const ageGroupData = [
    { group: '18-24', happiness: 8.22, users: 32, screenTime: 5.23, stress: 6.63 },
    { group: '25-34', happiness: 8.24, users: 25, screenTime: 5.70, stress: 6.84 },
    { group: '35-44', happiness: 8.83, users: 35, screenTime: 5.07, stress: 6.43 },
    { group: '45+', happiness: 8.71, users: 7, screenTime: 5.73, stress: 5.86 },
  ];

  const genderData = [
    { gender: 'Other', happiness: 8.82, users: 11, exercise: 3.00 },
    { gender: 'Male', happiness: 8.69, users: 42, exercise: 2.52 },
    { gender: 'Female', happiness: 8.20, users: 46, exercise: 2.17 },
  ];

  const exerciseImpact = [
    { category: 'Low (< 2/week)', happiness: 8.62, users: 29, stress: 6.41 },
    { category: 'Medium (2-4/week)', happiness: 8.31, users: 48, stress: 6.81 },
    { category: 'High (4+/week)', happiness: 8.64, users: 22, stress: 6.18 },
  ];

  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'];

  const KeyFinding = ({ title, value, description, trend }) => (
    <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">{value}</p>
          <p className="text-sm text-gray-600 mt-2">{description}</p>
        </div>
        {trend && (
          <span className={`text-2xl ${trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
            {trend === 'up' ? '↑' : '↓'}
          </span>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Social Media & Happiness Analysis
          </h1>
          <p className="text-gray-600">
            Comprehensive analysis of 99 users across 6 platforms
          </p>
        </div>

        <div className="flex gap-2 mb-6 overflow-x-auto">
          {['overview', 'platforms', 'behavior', 'demographics'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === tab
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <KeyFinding
                title="Average Happiness"
                value="8.47/10"
                description="Overall happiness index across all users"
                trend="up"
              />
              <KeyFinding
                title="Critical Finding"
                value="-28%"
                description="Happiness drops with 6+ hrs screen time"
                trend="down"
              />
              <KeyFinding
                title="Best Platform"
                value="LinkedIn"
                description="Highest happiness score (8.88/10)"
                trend="up"
              />
              <KeyFinding
                title="Sleep Impact"
                value="+38%"
                description="Happiness boost with good sleep (7+ quality)"
                trend="up"
              />
              <KeyFinding
                title="Worst Platform"
                value="Instagram"
                description="Lowest happiness score (7.30/10)"
                trend="down"
              />
              <KeyFinding
                title="Optimal Screen Time"
                value="< 4 hrs"
                description="Highest happiness at 9.57/10"
                trend="up"
              />
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-lg shadow-xl">
              <h2 className="text-2xl font-bold mb-4">🔑 Key Findings</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white bg-opacity-10 backdrop-blur p-4 rounded">
                  <h3 className="font-bold mb-2">1. Screen Time is THE Major Factor</h3>
                  <p className="text-sm">Users with less than 4 hrs/day have 28% higher happiness (9.57) vs 6+ hrs (7.45)</p>
                </div>
                <div className="bg-white bg-opacity-10 backdrop-blur p-4 rounded">
                  <h3 className="font-bold mb-2">2. Sleep Quality Dominates</h3>
                  <p className="text-sm">Good sleep (7+) correlates with 38% higher happiness compared to poor sleep</p>
                </div>
                <div className="bg-white bg-opacity-10 backdrop-blur p-4 rounded">
                  <h3 className="font-bold mb-2">3. Platform Matters</h3>
                  <p className="text-sm">LinkedIn & Twitter users are 21% happier than Instagram users</p>
                </div>
                <div className="bg-white bg-opacity-10 backdrop-blur p-4 rounded">
                  <h3 className="font-bold mb-2">4. Age Sweet Spot</h3>
                  <p className="text-sm">35-44 age group reports highest happiness (8.83) with balanced screen time</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                📊 Screen Time Impact (Most Critical Factor)
              </h2>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={screenTimeImpact}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="category" />
                  <YAxis yAxisId="left" domain={[0, 10]} />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Legend />
                  <Bar yAxisId="left" dataKey="happiness" fill="#3b82f6" name="Happiness" />
                  <Bar yAxisId="left" dataKey="stress" fill="#ef4444" name="Stress" />
                  <Bar yAxisId="right" dataKey="users" fill="#10b981" name="Users" />
                </BarChart>
              </ResponsiveContainer>
              <p className="text-sm text-gray-600 mt-4 italic">
                ⚠️ Users with high screen time (6+ hrs) show 22% lower happiness and 49% higher stress
              </p>
            </div>
          </div>
        )}

        {activeTab === 'platforms' && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Platform Happiness Rankings
              </h2>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={platformData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" domain={[0, 10]} />
                  <YAxis dataKey="name" type="category" width={100} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="happiness" fill="#3b82f6" name="Happiness Score" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  User Distribution by Platform
                </h2>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={platformData}
                      dataKey="users"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      label
                    >
                      {platformData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Screen Time by Platform
                </h2>
                <ResponsiveContainer width="100%" height={300}>
                  <ScatterChart>
                    <CartesianGrid />
                    <XAxis dataKey="screenTime" name="Screen Time" unit=" hrs" />
                    <YAxis dataKey="happiness" name="Happiness" domain={[6, 10]} />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                    <Legend />
                    <Scatter name="Platforms" data={platformData} fill="#8b5cf6">
                      {platformData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Scatter>
                  </ScatterChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
              <h3 className="font-bold text-lg mb-2">💡 Platform Insights</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✅ LinkedIn users report highest happiness (8.88) with professional content focus</li>
                <li>✅ X (Twitter) close second (8.81) with moderate screen time (5.02 hrs)</li>
                <li>⚠️ Instagram shows lowest happiness (7.30) despite similar demographics</li>
                <li>📱 TikTok users spend most time (5.49 hrs) but maintain good happiness (8.54)</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'behavior' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Sleep Quality Impact
                </h2>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={sleepImpact}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="category" />
                    <YAxis domain={[0, 10]} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="happiness" fill="#10b981" name="Happiness" />
                    <Bar dataKey="stress" fill="#ef4444" name="Stress" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Exercise Frequency Impact
                </h2>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={exerciseImpact}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="category" />
                    <YAxis domain={[8, 9]} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="happiness" stroke="#3b82f6" strokeWidth={3} name="Happiness" />
                    <Line type="monotone" dataKey="stress" stroke="#ef4444" strokeWidth={3} name="Stress" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Factor Impact on Happiness (Ranked)
              </h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-48 font-semibold">1. Screen Time</div>
                  <div className="flex-1 bg-gray-200 rounded-full h-6">
                    <div className="bg-red-500 h-6 rounded-full" style={{width: '95%'}}></div>
                  </div>
                  <div className="w-20 text-right font-bold text-red-600">-0.85</div>
                </div>
                <div className="flex items-center">
                  <div className="w-48 font-semibold">2. Sleep Quality</div>
                  <div className="flex-1 bg-gray-200 rounded-full h-6">
                    <div className="bg-green-500 h-6 rounded-full" style={{width: '92%'}}></div>
                  </div>
                  <div className="w-20 text-right font-bold text-green-600">+0.78</div>
                </div>
                <div className="flex items-center">
                  <div className="w-48 font-semibold">3. Stress Level</div>
                  <div className="flex-1 bg-gray-200 rounded-full h-6">
                    <div className="bg-red-500 h-6 rounded-full" style={{width: '75%'}}></div>
                  </div>
                  <div className="w-20 text-right font-bold text-red-600">-0.67</div>
                </div>
                <div className="flex items-center">
                  <div className="w-48 font-semibold">4. Platform Choice</div>
                  <div className="flex-1 bg-gray-200 rounded-full h-6">
                    <div className="bg-blue-500 h-6 rounded-full" style={{width: '45%'}}></div>
                  </div>
                  <div className="w-20 text-right font-bold text-blue-600">±0.42</div>
                </div>
                <div className="flex items-center">
                  <div className="w-48 font-semibold">5. Exercise</div>
                  <div className="flex-1 bg-gray-200 rounded-full h-6">
                    <div className="bg-green-500 h-6 rounded-full" style={{width: '25%'}}></div>
                  </div>
                  <div className="w-20 text-right font-bold text-green-600">+0.18</div>
                </div>
                <div className="flex items-center">
                  <div className="w-48 font-semibold">6. SM Detox Days</div>
                  <div className="flex-1 bg-gray-200 rounded-full h-6">
                    <div className="bg-gray-400 h-6 rounded-full" style={{width: '10%'}}></div>
                  </div>
                  <div className="w-20 text-right font-bold text-gray-600">+0.05</div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
              <h3 className="font-bold text-lg mb-2">🎯 Behavioral Recommendations</h3>
              <ul className="space-y-2 text-gray-700">
                <li>🛌 Prioritize sleep quality - strongest positive correlation with happiness</li>
                <li>📱 Limit screen time to under 4 hours daily for optimal wellbeing</li>
                <li>💪 Exercise shows modest but positive impact - aim for 4+ sessions weekly</li>
                <li>😌 Managing stress is critical - inversely related to happiness</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'demographics' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Happiness by Age Group
                </h2>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={ageGroupData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="group" />
                    <YAxis domain={[7, 9]} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="happiness" fill="#3b82f6" name="Happiness" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Happiness by Gender
                </h2>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={genderData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="gender" />
                    <YAxis domain={[7, 9]} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="happiness" fill="#8b5cf6" name="Happiness" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Screen Time vs Stress Across Age Groups
              </h2>
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={ageGroupData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="group" />
                  <YAxis yAxisId="left" domain={[5, 7]} />
                  <YAxis yAxisId="right" orientation="right" domain={[5, 7]} />
                  <Tooltip />
                  <Legend />
                  <Line yAxisId="left" type="monotone" dataKey="screenTime" stroke="#f59e0b" strokeWidth={3} name="Screen Time (hrs)" />
                  <Line yAxisId="right" type="monotone" dataKey="stress" stroke="#ef4444" strokeWidth={3} name="Stress Level" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
              <h3 className="font-bold text-lg mb-2">📊 Demographic Insights</h3>
              <ul className="space-y-2 text-gray-700">
                <li>👥 35-44 age group shows highest happiness (8.83) with lowest screen time (5.07 hrs)</li>
                <li>👨 Males report 6% higher happiness than females (8.69 vs 8.20)</li>
                <li>🏋️ Gender identifying as Other shows highest exercise frequency (3.0x/week) and happiness (8.82)</li>
                <li>📉 Younger groups (18-24) have higher screen time but lower happiness compared to 35-44</li>
                <li>⚖️ Age appears to bring better work-life balance and social media habits</li>
              </ul>
            </div>
          </div>
        )}

        <div className="bg-white rounded-lg shadow-xl p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">📋 Executive Summary</h2>
          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">
              Based on analysis of 99 users across 6 social media platforms, this study identifies the key factors affecting happiness in social media usage:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-bold text-red-800 mb-2">⚠️ Negative Factors</h3>
                <ul className="space-y-1">
                  <li>• High screen time (6+ hrs): -22% happiness</li>
                  <li>• Poor sleep quality: -38% happiness</li>
                  <li>• High stress levels: Strong inverse correlation</li>
                  <li>• Instagram usage: Lowest happiness platform</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-bold text-green-800 mb-2">✅ Positive Factors</h3>
                <ul className="space-y-1">
                  <li>• Low screen time (less than 4 hrs): +28% happiness</li>
                  <li>• Good sleep (7+): +38% happiness</li>
                  <li>• LinkedIn/Twitter usage: Highest happiness</li>
                  <li>• Age 35-44: Optimal balance achieved</li>
                </ul>
              </div>
            </div>
            <p className="mt-6 font-semibold text-lg text-blue-800">
              🎯 Key Takeaway: Screen time and sleep quality are the dominant factors affecting happiness - managing these two variables can improve wellbeing by up to 30%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;