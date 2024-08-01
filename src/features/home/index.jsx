import "./styles/home.scss";
import UserCircularProgress from "../goals/components/ProgressGoal.jsx";
import RecentDocuments from "../documents/components/ListDocuments.jsx";
import userJson from "../../data/user.json";

const { name, current_organisation } = userJson.data;
const isPersonal = current_organisation.is_personal;

export default function HomeFeature() {
  return (
    <div className="home-container">
      <div className="home-user-container">
        <span className="home-username">Hi, {name} 👋</span>
        <span className="home-description">
        {!isPersonal ? "  Manage your documents issued by SMU Academy or track your career goal. " : "Manage your documents"}
        </span>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {!isPersonal && (
          <div className="col-span-12 sm:col-span-4 lg:col-span-3">
            <UserCircularProgress showLink={true} showDetails={false} />
          </div>
        )}

        <div
          className={`col-span-12 ${isPersonal ? 'lg:col-span-12' : 'sm:col-span-8 lg:col-span-9'}`}
        >
          <RecentDocuments showLink={true} />
        </div>
      </div>
    </div>
  );
}