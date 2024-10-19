import { FiPlusCircle } from "react-icons/fi";

const BenefitsSection = () => {
  return (
    <section className="py-16 px-4 lg:px-8 text-primary">
      <div className="container mx-auto ">
        <p className="text-secondary text-lg font-semibold uppercase mb-4">
          Built with you in mind
        </p>
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">Benefits of RaaS</h2>
        <p className="text-lg text-gray-600 mb-12">
          Take the guesswork out of EV charger station operations and maintenance.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Benefit 1 */}
          <div className="flex items-start space-x-4">
            <FiPlusCircle className="text-secondary text-4xl" />
            <div>
              <h3 className="text-2xl font-semibold mb-2">Unlimited Corrective Maintenance</h3>
              <p className="text-gray-600">
                RaaS is all-inclusive, meaning we&apos;re here for you any time you need us, all for one low monthly fee.
              </p>
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="flex items-start space-x-4">
            <FiPlusCircle className="text-secondary text-4xl" />
            <div>
              <h3 className="text-2xl font-semibold mb-2">Certified EVSE Technicians</h3>
              <p className="text-gray-600">
                ChargerHelp!’s certified EVSE Technicians provide expert services at speeds that meet your business needs.
              </p>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="flex items-start space-x-4">
            <FiPlusCircle className="text-secondary text-4xl" />
            <div>
              <h3 className="text-2xl font-semibold mb-2">Fast, Reliable Service</h3>
              <p className="text-gray-600">
                No more wondering who to call or how long it will take to get up and running again. You can depend on us.
              </p>
            </div>
          </div>

          {/* Benefit 4 */}
          <div className="flex items-start space-x-4">
            <FiPlusCircle className="text-secondary text-4xl" />
            <div>
              <h3 className="text-2xl font-semibold mb-2">Predictable O&M Costs</h3>
              <p className="text-gray-600">
                No more guesswork - with one monthly fee, you know what you&apos;re spending and when.
              </p>
            </div>
          </div>

          {/* Benefit 5 */}
          <div className="flex items-start space-x-4">
            <FiPlusCircle className="text-secondary text-4xl" />
            <div>
              <h3 className="text-2xl font-semibold mb-2">Increased Utilization</h3>
              <p className="text-gray-600">
                With 97% uptime, your customers will use your charging stations more often.
              </p>
            </div>
          </div>

          {/* Benefit 6 */}
          <div className="flex items-start space-x-4">
            <FiPlusCircle className="text-secondary text-4xl" />
            <div>
              <h3 className="text-2xl font-semibold mb-2">Boost Your Brand</h3>
              <p className="text-gray-600">
                Your business is only as good as your reputation. Give your drivers reliability worth talking about.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
