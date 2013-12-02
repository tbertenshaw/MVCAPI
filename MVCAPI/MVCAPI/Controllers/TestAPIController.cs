using MVCAPI.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MVCAPI.Controllers
{
    public class TestAPIController : ApiController
    {
        [HttpGet]
        [Route("api/Test/getStuff")]
        public String getStuff()
        {
            var vm = "Hello unAuthorized World";
            return vm;
        }
        [HttpGet]
        [Authorize]
        [Route("api/Test/getAuthorizedStuff")]
        public String getAuthorizedStuff()
        {
            var vm = "Hello Authorized World";
            return vm;
        }
        [HttpGet]
        [APIAuthorize]
        [Route("api/Test/getcustomAuthorizedStuff")]
        public String getcustomAuthorizedStuff()
        {
            var vm = "Hello Custom Authorized World";
            return vm;
        }
    }
}
