import React, { useState } from "react";

interface EditCertCoursesSectionProps {
  certifications: string[];
  setCertifications: React.Dispatch<React.SetStateAction<string[]>>;
  courses: string[];
  setCourses: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function EditCertCoursesSection({
  certifications,
  setCertifications,
  courses,
  setCourses
}: EditCertCoursesSectionProps) {
  const [newCert, setNewCert] = useState("");
  const [newCourse, setNewCourse] = useState("");

  return (
    <>
      {/* Certifications */}
      <div className="border border-slate-200 rounded-xl p-5 flex flex-col gap-4">
        <span className="text-sm font-semibold text-slate-700">Certifications</span>
        {certifications.map((c, idx) => (
          <div key={idx} className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-medium text-slate-500">Certification Name</label>
              <button
                type="button"
                onClick={() => setCertifications(prev => prev.filter((_, i) => i !== idx))}
                className="text-rose-400 hover:text-rose-600 transition-colors cursor-pointer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" /><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
              </button>
            </div>
            <input
              type="text"
              value={c}
              onChange={(e) => {
                const val = e.target.value;
                setCertifications(prev => prev.map((item, i) => i === idx ? val : item));
              }}
              className="w-full border-b border-slate-200 focus:border-[#5e53fc] focus:outline-none pb-2 text-sm text-slate-700 bg-transparent font-semibold"
            />
          </div>
        ))}
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Add new certification"
            value={newCert}
            onChange={(e) => setNewCert(e.target.value)}
            className="flex-1 border border-slate-200 rounded-lg px-3 py-1.5 text-xs focus:outline-none focus:border-[#5e53fc]"
          />
          <button
            type="button"
            onClick={() => { if (newCert.trim()) { setCertifications(prev => [...prev, newCert.trim()]); setNewCert(""); } }}
            className="px-4 py-1.5 bg-[#5e53fc] hover:bg-[#4d42eb] text-white rounded-lg text-xs font-semibold cursor-pointer"
          >
            Add
          </button>
        </div>
      </div>

      {/* Courses */}
      <div className="border border-slate-200 rounded-xl p-5 flex flex-col gap-4">
        <span className="text-sm font-semibold text-slate-700">Completed Courses</span>
        {courses.map((c, idx) => (
          <div key={idx} className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-medium text-slate-500">Course Title</label>
              <button
                type="button"
                onClick={() => setCourses(prev => prev.filter((_, i) => i !== idx))}
                className="text-rose-400 hover:text-rose-600 transition-colors cursor-pointer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" /><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
              </button>
            </div>
            <input
              type="text"
              value={c}
              onChange={(e) => {
                const val = e.target.value;
                setCourses(prev => prev.map((item, i) => i === idx ? val : item));
              }}
              className="w-full border-b border-slate-200 focus:border-[#5e53fc] focus:outline-none pb-2 text-sm text-slate-700 bg-transparent font-semibold"
            />
          </div>
        ))}
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Add new course"
            value={newCourse}
            onChange={(e) => setNewCourse(e.target.value)}
            className="flex-1 border border-slate-200 rounded-lg px-3 py-1.5 text-xs focus:outline-none focus:border-[#5e53fc]"
          />
          <button
            type="button"
            onClick={() => { if (newCourse.trim()) { setCourses(prev => [...prev, newCourse.trim()]); setNewCourse(""); } }}
            className="px-4 py-1.5 bg-[#5e53fc] hover:bg-[#4d42eb] text-white rounded-lg text-xs font-semibold cursor-pointer"
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
}
