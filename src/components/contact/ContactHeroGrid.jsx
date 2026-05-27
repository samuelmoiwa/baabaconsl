import { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaBuilding, FaMapMarkerAlt, FaUserTie } from 'react-icons/fa';

const ContactHeroGrid = () => {
  const [formData, setFormData] = useState({
    clientName: '',
    email: '',
    phone: '',
    category: 'Residential',
    location: '',
    brief: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Actionable pipeline submission tracking hook
    console.log('Submitted RFP Parameters:', formData);
    alert('Project request parameters logged successfully. Baabacon engineering desk will contact you.');
  };

  return (
    <section className="py-20 max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-12 gap-12 items-start">

        {/* ================= COLUMN A: DIGITAL RFP & ESTIMATOR FORM ================= */}
        <div className="lg:col-span-7 bg-white border border-slate-200/60 rounded-[2.5rem] p-8 md:p-10 shadow-[0_20px_50px_-20px_rgba(30,58,138,0.05)]">
          <div className="space-y-2 mb-8">
            <span className="text-xs font-black tracking-widest text-[#F97316] uppercase bg-[#F97316]/10 px-3 py-1 rounded-md inline-block">
              Project Intake Terminal
            </span>
            <h1 className="text-3xl font-black text-[#1E3A8A] tracking-tight">
              Request An Estimate
            </h1>
            <p className="text-slate-400 text-xs md:text-sm font-normal">
              Submit your structural briefs or material logistics requests to our optimization desk.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name / Corporate Entity Title */}
            <div className="relative">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">Full Name / Company Name</label>
              <div className="relative">
                <FaUserTie className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
                <input
                  type="text"
                  required
                  placeholder="e.g., Ministry of Health / Private Estate Manager"
                  className="w-full bg-slate-50 border border-slate-200 focus:border-[#1E3A8A] focus:bg-white text-slate-800 rounded-xl pl-11 pr-4 py-3.5 text-sm font-medium outline-none transition-all duration-300"
                  onChange={(e) => setFormData({...formData, clientName: e.target.value})}
                />
              </div>
            </div>

            {/* Twin Communication Entry Channels */}
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">Email Address</label>
                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
                  <input
                    type="email"
                    required
                    placeholder="manager@corporate.com"
                    className="w-full bg-slate-50 border border-slate-200 focus:border-[#1E3A8A] focus:bg-white text-slate-800 rounded-xl pl-11 pr-4 py-3.5 text-sm font-medium outline-none transition-all duration-300"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">Verified Phone Number</label>
                <div className="relative">
                  <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
                  <input
                    type="tel"
                    required
                    placeholder="+232 78 661 031"
                    className="w-full bg-slate-50 border border-slate-200 focus:border-[#1E3A8A] focus:bg-white text-slate-800 rounded-xl pl-11 pr-4 py-3.5 text-sm font-medium outline-none transition-all duration-300"
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>
            </div>

            {/* Target Services Dynamic Dropdown & Geographic Site Parameters */}
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">Service Category Selector</label>
                <div className="relative">
                  <FaBuilding className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm pointer-events-none" />
                  <select
                    className="w-full bg-slate-50 border border-slate-200 focus:border-[#1E3A8A] focus:bg-white text-slate-800 rounded-xl pl-11 pr-4 py-3.5 text-sm font-bold outline-none transition-all duration-300 appearance-none"
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                  >
                    <option value="Residential">Residential Construction</option>
                    <option value="Chapels">Chapels & Assemblies</option>
                    <option value="Boreholes">Borehole Drilling Utilities</option>
                    <option value="Woodworks">Architectural Woodworks</option>
                    <option value="Solar">Sustainable Solar Grid</option>
                    <option value="Rentals">Heavy Machinery Rentals</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">Estimated Project Location</label>
                <div className="relative">
                  <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
                  <input
                    type="text"
                    required
                    placeholder="e.g., Wellington, Freetown / Bo Site"
                    className="w-full bg-slate-50 border border-slate-200 focus:border-[#1E3A8A] focus:bg-white text-slate-800 rounded-xl pl-11 pr-4 py-3.5 text-sm font-medium outline-none transition-all duration-300"
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                  />
                </div>
              </div>
            </div>

            {/* Structural Scope Brief Textarea Block */}
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">Project Brief / Scope Details</label>
              <textarea
                rows="4"
                required
                placeholder="Describe your structural requirements, target deadlines, or load specs..."
                className="w-full bg-slate-50 border border-slate-200 focus:border-[#1E3A8A] focus:bg-white text-slate-800 rounded-xl px-4 py-3.5 text-sm font-medium outline-none transition-all duration-300 resize-none"
                onChange={(e) => setFormData({...formData, brief: e.target.value})}
              ></textarea>
            </div>

            {/* Submission Action Trigger */}
            <button
              type="submit"
              className="w-full bg-[#1E3A8A] hover:bg-[#F97316] text-white font-black tracking-wider text-xs uppercase py-4 rounded-xl shadow-md transition-all duration-300 mt-2 transform hover:-translate-y-0.5"
            >
              Submit Project Request →
            </button>
          </form>
        </div>

        {/* ================= COLUMN B: DIRECT CORPORATE DESK CHANNELS ================= */}
        <div className="lg:col-span-5 space-y-8 lg:pt-12">
          <div className="space-y-3">
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">
              Direct Corporate Routing
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed font-normal">
              Skip the intake form completely to patch directly into our live central operational desks for emergency repairs, machinery logistics pricing, or legal contract execution.
            </p>
          </div>

          <div className="space-y-4">
            {/* Primary Corporate Mailbox Desk Link */}
            <a
              href="mailto:info@baabaconsl.com"
              className="group flex items-center gap-5 p-5 bg-white hover:bg-slate-900 border border-slate-200/60 rounded-2xl transition-all duration-300 shadow-sm"
            >
              <div className="w-12 h-12 bg-[#1E3A8A]/5 text-[#1E3A8A] group-hover:bg-[#F97316] group-hover:text-white rounded-xl flex items-center justify-center text-lg transition-colors duration-300 shrink-0">
                <FaEnvelope />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Official Email Desk</p>
                <p className="text-base font-bold text-slate-800 group-hover:text-white transition-colors">info@baabaconsl.com</p>
              </div>
            </a>

            {/* Operational Mobile Desk Link Line 1 */}
            <a
              href="tel:+23278661031"
              className="group flex items-center gap-5 p-5 bg-white hover:bg-slate-900 border border-slate-200/60 rounded-2xl transition-all duration-300 shadow-sm"
            >
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 group-hover:bg-[#F97316] group-hover:text-white rounded-xl flex items-center justify-center text-lg transition-colors duration-300 shrink-0">
                <FaPhoneAlt />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Operations hotline (Desk 1)</p>
                <p className="text-base font-bold text-slate-800 group-hover:text-white transition-colors">+232 78 661 031</p>
              </div>
            </a>

            {/* Operational Mobile Desk Link Line 2 */}
            <a
              href="tel:+23276136564"
              className="group flex items-center gap-5 p-5 bg-white hover:bg-slate-900 border border-slate-200/60 rounded-2xl transition-all duration-300 shadow-sm"
            >
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 group-hover:bg-[#F97316] group-hover:text-white rounded-xl flex items-center justify-center text-lg transition-colors duration-300 shrink-0">
                <FaPhoneAlt />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Operations hotline (Desk 2)</p>
                <p className="text-base font-bold text-slate-800 group-hover:text-white transition-colors">+232 76 136 564</p>
              </div>
            </a>
          </div>

          {/* Quick SLA Corporate Note */}
          <div className="bg-slate-200/40 border border-slate-200 rounded-2xl p-5 text-xs text-slate-500 font-medium leading-relaxed">
            <strong>Response Framework SLA:</strong> Technical assessments for heavy residential pouring or deep utility borehole drilling requests are processed within exactly 48 operational hours from receipt.
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactHeroGrid;
