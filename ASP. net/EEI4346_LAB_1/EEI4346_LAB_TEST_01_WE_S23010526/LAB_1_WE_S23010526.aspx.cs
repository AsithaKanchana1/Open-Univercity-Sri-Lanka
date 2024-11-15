using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace EEI4346_LAB_TEST_01_WE_S23010526
{
    public partial class LAB_1_WE_S23010526 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void TextBox5_TextChanged(object sender, EventArgs e)
        {

        }

        protected void btn_submit_Click(object sender, EventArgs e)
        {
            Response.Write(txt_cust_name.Text + "</br>");
            Response.Write(txt_address.Text + "</br>");
            Response.Write(txt_product_code.Text + "</br>");
            Response.Write(txt_Quentity.Text + "</br>");
            Response.Write(DropDownList1.SelectedItem.Text + "</br>");
        }
    }
}