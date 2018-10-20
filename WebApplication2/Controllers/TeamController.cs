using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication2;
using System.Net.Http.Formatting;
using WebApplication2.Models;

namespace WebApplication2.Controllers
{
    public class TeamController : ApiController
    {
        [HttpGet]
        public HttpResponseMessage GetTeamDetail()
        {
            Database1Entities objcontext = new Database1Entities();          
            
            HttpResponseMessage responsemessage = new HttpResponseMessage();

            Class1 obj = new Class1();
            List<Emp1> emp = new List<Emp1>();
            var result = objcontext.Teams.AsEnumerable();
            obj.TeamManagerName = "abc";
            obj.TeamName = "RRT";
            // obj.lstEmp = result.ToList();
            List<Emp> emp123 = objcontext.Emps.AsEnumerable().ToList();
            foreach (var i in emp123)
            {
                Emp1 e = new Emp1();
                e.empId = i.empId;
                e.empName = i.empName.Trim();
                obj.employees.Add(e);
            }
             var responseData = new { data = obj };
            responsemessage = Request.CreateResponse(HttpStatusCode.OK, responseData, Configuration.Formatters.JsonFormatter);
            return responsemessage;
        }

        [HttpGet]
        public HttpResponseMessage GetTeamName(string TeamName)
        {
            Database1Entities objcontext = new Database1Entities();

            HttpResponseMessage responsemessage = new HttpResponseMessage();

            List<Team> obj = new List<Team>();

            var i = objcontext.Teams.Where(x => x.TeamName.Equals(TeamName)).ToList();
            var responseDate = new { data = i };
            responsemessage = Request.CreateResponse(HttpStatusCode.OK, responseDate, Configuration.Formatters.JsonFormatter);
            return responsemessage;
          
        }
    }
}
