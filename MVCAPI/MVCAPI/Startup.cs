using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MVCAPI.Startup))]
namespace MVCAPI
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
