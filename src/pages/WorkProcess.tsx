import { motion } from "motion/react";
import { CheckCircle } from "lucide-react";

const steps = [
  {
    title: "Requirement Discussion",
    desc: "Understanding your business needs and goals",
  },
  {
    title: "Planning & Strategy",
    desc: "Creating roadmap and project structure",
  },
  {
    title: "Design Phase",
    desc: "UI/UX design or concept creation",
  },
  {
    title: "Development Phase",
    desc: "Website or service execution",
  },
  {
    title: "Review & Revisions",
    desc: "Client feedback and improvements",
  },
  {
    title: "Final Delivery",
    desc: "Project handover after approval",
  },
  {
    title: "Support",
    desc: "Post-delivery assistance (if applicable)",
  },
];

const commitments = [
  "Deliver high-quality work on time",
  "Maintain clear communication with clients",
  "Provide regular project updates",
  "Offer revisions as per agreement",
  "Ensure client satisfaction before final delivery",
  "Maintain transparency in pricing and timelines",
];

export default function WorkProcess() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 px-6 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold mb-3">🚀 Work Delivery Process</h1>
          <p className="text-gray-500">
            Our workflow ensures smooth and professional project execution
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold mb-2">
                {index + 1}. {step.title}
              </h3>
              <p className="text-gray-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Commitment Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white p-8 rounded-2xl shadow"
        >
          <h2 className="text-2xl font-bold mb-4">🤝 Work Commitment Process</h2>
          <div className="space-y-3">
            {commitments.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="text-green-500 mt-1" size={18} />
                <p>{item}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-gray-600">
            We are committed to building long-term relationships through trust,
            quality, and results.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
