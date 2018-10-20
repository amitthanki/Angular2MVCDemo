using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication2.Models
{
    public class Class1
    {
        public Class1()
        {
            employees = new List<Emp1>();
        }
      
        public string TeamName { get; set; }
        public string TeamManagerName { get; set; }

        public List<Emp1> employees { get; set; }
    }

    public class Emp1
    {
        public int? empId { get; set; }

        public string empName { get; set; }
    }
}