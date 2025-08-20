import Button from "../../Components/Button";
import TechIcon from "../../Components/TechIcon";

const SingleListItem = ({ faculty }) => {
  return (
    <div className="bg-navy-dark rounded-xl shadow-lg hover:shadow-2xl hover:shadow-orange-500 transition-all duration-300 group hover:scale-105 flex flex-col md:flex-row md:items-center overflow-hidden">
      <div className="relative md:w-1/3 h-[300px] overflow-hidden">
        <img
          src={faculty.image}
          alt={faculty.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white mb-1">{faculty.name}</h3>
          <p className="text-accent font-semibold text-sm mb-1">
            {faculty.department} Department
          </p>
          <p className="text-soft-white text-sm">{faculty.subject}</p>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center space-x-2 text-soft-white/70">
            <TechIcon name="mail" className="h-4 w-4 text-accent/40" />
            <a
              href={`mailto:${faculty.email}`}
              className="text-sm hover:text-accent/40 transition-colors truncate"
            >
              {faculty.email}
            </a>
          </div>
          <div className="flex items-center space-x-2 text-soft-white/70">
            <TechIcon name="phone" className="h-4 w-4 text-accent/40" />
            <a
              href={`tel:${faculty.phone}`}
              className="text-sm hover:text-accent/40 transition-colors"
            >
              {faculty.phone}
            </a>
          </div>
        </div>

        <div className="flex items-center justify-between mt-auto">
          <div className="flex space-x-3">
            {faculty.socialMedia.linkedin && (
              <a
                href={faculty.socialMedia.linkedin}
                className="text-border-gray hover:text-accent/60 transition-colors"
                aria-label="LinkedIn"
              >
                <TechIcon name="linkedin" className="h-5 w-5" />
              </a>
            )}
            {faculty.socialMedia.twitter && (
              <a
                href={faculty.socialMedia.twitter}
                className="text-border-gray hover:text-accent/60 transition-colors"
                aria-label="Twitter"
              >
                <TechIcon name="twitter" className="h-5 w-5" />
              </a>
            )}
            {faculty.socialMedia.facebook && (
              <a
                href={faculty.socialMedia.facebook}
                className="text-border-gray hover:text-accent/60 transition-colors"
                aria-label="Facebook"
              >
                <TechIcon name="facebook" className="h-5 w-5" />
              </a>
            )}
          </div>

          <Button className="flex items-center space-x-1 rounded-lg text-sm font-medium transition-colors group">
            <TechIcon name="eye" className="h-4 w-4" />
            <span>View Profile</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SingleListItem;
