import Button from "../../Components/Button";
import TechIcon from "../../Components/TechIcon";

const SingleGridItem = ({ faculty }) => {
  return (
    <div className="bg-navy-dark rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:shadow-orange-500 transform hover:scale-105 overflow-hidden group">
      <div className="relative overflow-hidden">
        <img
          src={faculty.image}
          alt={faculty.name}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="p-6">
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

        <div className="flex items-center justify-between">
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
                <TechIcon name="Twitter" className="h-5 w-5" />
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

export default SingleGridItem;
