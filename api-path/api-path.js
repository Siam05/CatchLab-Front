var host = "https://catchlab-api.smicee.com";

const V1API = {
  // client
  get_client: host + "/api/client/",

  // service
  get_services_list: host + "/api/services/",

  // site settings
  get_site_settings: host + "/api/home/settings/",

  // Projects
  get_categories: host + "/api/category/",
  get_projects: host + "/api/projects/",
  get_projects_by_category: host + "/api/projects/by-category/",

  // Jobs
  get_job_post: host + "/api/jobs/position",
  get_job_post_details: host + "/api/jobs/position/",
  create_job_application: host + "/api/jobs/applications/create"
};

export default V1API;
