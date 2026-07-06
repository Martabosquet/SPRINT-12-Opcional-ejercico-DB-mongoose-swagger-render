import basicInfo from "./basicInfo.js";
import components from "./components.js";
import tasks from "./tasks.js";

const swaggerDocument = {
    ...basicInfo,
    components,
    paths: {
        ...tasks,
    },
};

export default swaggerDocument;