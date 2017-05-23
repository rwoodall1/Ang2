﻿using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using LS.WebApp.CustomAttributes;
using Microsoft.AspNet.Identity.Owin;

namespace LS.WebApp.Controllers.mvc
{
    [AuthorizeRedirect("/login")]
    public class AngularAccessController : Controller
    {
        private ApplicationSignInManager _signInManager;
        public ApplicationSignInManager SignInManager
        {
            get
            {
                return _signInManager ?? HttpContext.GetOwinContext().Get<ApplicationSignInManager>();
            }
            private set
            {
                _signInManager = value;
            }
        }

        public async Task<ActionResult> Index()
        {
            // TODO: When the time is right, remove this you must, young padawan
//            await SignInManager.PasswordSignInAsync("Administrator", "Test3r123!", true, false);

            return File("~/app/index.html", "text/html");
        }

        public ActionResult Error()
        {
            return View();
        }
    }
}