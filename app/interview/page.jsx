import { getAssessments } from "@/actions/interview";
import StatsCards from "./_components/stats-cards";
import PerformanceChart from "./_components/performance-chart";
import QuizList from "./_components/quiz-list";

const InterviewPage = async () => {
  const assessments = await getAssessments();
  return (
    <div className="mt-24">
      <h1 className="text-6xl font-bold gradient-title mb-5">
        Interview Preparation
      </h1>

      <div className="space-y-6">
        <StatsCards assessments={assessments} />
        <PerformanceChart assessments={assessments} />
        <QuizList assessments={assessments} />

        {/* npx inngest-cli@latest dev for running inngest */}
      </div>
    </div>
  );
};

export default InterviewPage;
