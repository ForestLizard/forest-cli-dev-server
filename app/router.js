'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/project/getTemplate', controller.project.getTemplate);
  router.post('/component/getTemplate', controller.component.getTemplate);
};
