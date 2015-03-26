using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularDemo.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";

            return View();
        }

        public ActionResult Demo(int id)
        {
            switch (id)
            {
                case (1):
                {
                    return View("Include/_demo1");
                }
                case (2):
                {
                    return View("Include/_demo2");
                }
                case (3):
                {
                    return View("Include/_demo3");
                }
                default:
                {
                    return View("Include/_demo1");
                }
            }
        }
    }
}
