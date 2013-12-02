

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Controllers;
using System.Net;

namespace  MVCAPI.Filters
{

    public class APIAuthorizeAttribute : AuthorizeAttribute
    {

        protected override void HandleUnauthorizedRequest(HttpActionContext actionContext)
        {
        //    var httpContext = actionContext.ControllerContext;
        //    //var request = httpContext.Request;
        //    var response = httpContext.Response;
        //    var user = httpContext.User;

        //    //if (request.IsAjaxRequest())
        //    //{
        //    if (user.Identity.IsAuthenticated == false)
        //        response.StatusCode = (int)HttpStatusCode.Unauthorized;
        //    else
        //        response.StatusCode = (int)HttpStatusCode.Forbidden;

        //    response.SuppressFormsAuthenticationRedirect = true;
        //    response.End();
        //    //}

            //the above commented out code was suggested... but none of it appears valid for a webapiAuthorizeattribute
            base.HandleUnauthorizedRequest(actionContext);
        }
    }
}