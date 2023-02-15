'use strict';

const { Controller } = require('egg');

class ProjectController extends Controller {
  async getTemplate() {
    const { ctx } = this;
    ctx.body = {
        data: [
            {
                name: 'create-react-app模板',
                npmName: '@forest-cli-dev-template-project/create-react-app',
                installCmd: 'pnpm install'
            },
            {
                name: 'next.js模板',
                npmName: '@forest-cli-dev-template-project/next',
                installCmd: 'pnpm install'
            }
        ],
        msg: '',
        code: 0,
    }
  }
}

module.exports = ProjectController;
