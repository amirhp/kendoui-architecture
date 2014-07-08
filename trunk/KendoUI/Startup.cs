using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(KendoUI.Startup))]
namespace KendoUI
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
