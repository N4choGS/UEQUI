import {
  Dropdown,
  Option,
  useId,
} from "@fluentui/react-components";
import useCatalogData from '../../hooks/useCatalogData';
import './Filters.scss'
import { DatePicker } from "@fluentui/react-datepicker-compat";


export default function Filters() {
  const {data: dataModule, isLoading: isLoadingModule, hasError: hasErrorModule}= useCatalogData("Module")
  const {data: dataProject, isLoading: isLoadingProject, hasError: hasErrorProject}=   useCatalogData("Project")
  const comboModuleId = useId("combo-multi-module");
  const comboProjectId = useId("combo-multi-project");

  const shouldShowModule = !isLoadingModule && !hasErrorModule
  const shouldShowProject = !isLoadingProject && !hasErrorProject
    return (
      <div className="dashboardFilters">
            {shouldShowProject && (
              <div className="dropdownArea">
                    <div id={comboProjectId}>Project</div>
                    <Dropdown
                      aria-labelledby={comboProjectId}
                      multiselect={true}
                      placeholder="Select a project "
                    >
                      {dataProject.map((option) => (
                        <Option key={option.id} >
                          {option.name}
                        </Option>
                      ))}
                    </Dropdown>
              </div>
            )}

          {shouldShowModule && (
            <div className="dropdownArea">
              <div id={comboModuleId}>Module</div>
                <Dropdown
                  aria-labelledby={comboModuleId}
                  multiselect={true}
                  placeholder="Select a module "
                >
                  {dataModule.map((option) => (
                    <Option key={option.id} >
                      {option.name}
                    </Option>
                  ))}
                </Dropdown>
            </div>
          )}

            <div className="dropdownArea">
              <div id={comboModuleId}>Start date</div>
              <DatePicker placeholder="Select a start date" />
            </div>

            <div className="dropdownArea">
              <div id={comboModuleId}>End date</div>
              <DatePicker placeholder="Select an end date" />
            </div>

      </div>
     
    );
};
