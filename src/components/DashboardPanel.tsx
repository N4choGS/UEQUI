import useCatalogData from '../hooks/useCatalogData';
import useQuestionnaireData from '../hooks/useQuestionnaireData';


export default function DashboardPanel() {
    useCatalogData("Module")
    useCatalogData("Project")

    const projectIds = ['1', '4', '8'];
    const startDate = new Date('2022-01-01');
    const moduleIds = ['6', '3', "12"];
    const endDate = new Date('2022-02-20');
    useQuestionnaireData(projectIds, startDate, moduleIds, endDate)
    return (
        <div >
          Besitos
        </div>
    );
};
