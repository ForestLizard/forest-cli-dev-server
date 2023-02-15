'use strict';

const { Controller } = require('egg');

class ComponentController extends Controller {
  async getTemplate() {
    const { ctx } = this;
    ctx.body = {
        data: [
            {
                name: 'ListPage',
                npmName: '@forest-cli-dev-template-component/list-page',
                componentName: 'ListPage'
            },
        ],
        msg: '',
        code: 0,
    }
  }
}

module.exports = ComponentController;
