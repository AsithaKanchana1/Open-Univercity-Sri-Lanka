<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="LAB_1_WE_S23010526.aspx.cs" Inherits="EEI4346_LAB_TEST_01_WE_S23010526.LAB_1_WE_S23010526" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style type="text/css">
        .auto-style1 {
            width: 100%;
        }
        .auto-style2 {
            text-align: center;
            color: #CC00CC;
            font-size: xx-large;
        }
        .auto-style3 {
            height: 26px;
        }
        .auto-style4 {
            font-size: x-large;
            text-align: center;
            color: #CC00CC;
            width: 515px;
        }
        .auto-style5 {
            color: #FFFFFF;
            background-color: #990099;
        }
        .auto-style6 {
            text-align: center;
            width: 515px;
        }
        .auto-style7 {
            text-align: right;
        }
        .auto-style8 {
            height: 26px;
            text-align: right;
        }
        .auto-style9 {
            height: 26px;
            width: 515px;
        }
        .auto-style10 {
            width: 515px;
        }
        .auto-style11 {
            color: #FF0066;
        }
        .auto-style12 {
            color: #CC00CC;
        }
        .auto-style13 {
            color: #FF3300;
        }
        .auto-style16 {
            width: 515px;
            text-align: left;
        }
        .auto-style17 {
            height: 26px;
            width: 515px;
            text-align: left;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
        <div class="auto-style2">
            <strong>PLACE YOUR ORDER</strong></div>
        <table class="auto-style1">
            <tr>
                <td class="auto-style8"><strong>
                    <asp:Label ID="lbl_custemor" runat="server" CssClass="auto-style12" Text="Customer Name"></asp:Label>
                    </strong></td>
                <td class="auto-style17">
                    <asp:TextBox ID="txt_cust_name" runat="server" Width="440px"></asp:TextBox>
                </td>
                <td class="auto-style3"><em>
                    <asp:RequiredFieldValidator ID="validate_cus_name" runat="server" ControlToValidate="txt_cust_name" CssClass="auto-style11" ErrorMessage="Custemer Name Is Required"></asp:RequiredFieldValidator>
                    <br />
                    </em></td>
            </tr>
            <tr>
                <td>&nbsp;</td>
                <td class="auto-style10">&nbsp;</td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td class="auto-style7"><strong>
                    <asp:Label ID="lbl_address" runat="server" CssClass="auto-style12" Text="Address"></asp:Label>
                    </strong></td>
                <td class="auto-style16">
                    <asp:TextBox ID="txt_address" runat="server" Width="440px"></asp:TextBox>
                </td>
                <td><em>
                    <asp:RequiredFieldValidator ID="validate_address" runat="server" ControlToValidate="txt_address" CssClass="auto-style11" ErrorMessage="Address Is Required"></asp:RequiredFieldValidator>
                    <br />
                    </em></td>
            </tr>
            <tr>
                <td class="auto-style3"></td>
                <td class="auto-style9"></td>
                <td class="auto-style3"></td>
            </tr>
            <tr>
                <td class="auto-style7"><strong>
                    <asp:Label ID="lbl_product" runat="server" CssClass="auto-style12" Text="Product Code"></asp:Label>
                    </strong></td>
                <td class="auto-style16">
                    <asp:TextBox ID="txt_product_code" runat="server" TextMode="Number" Width="440px"></asp:TextBox>
                </td>
                <td><em>
                    <asp:RequiredFieldValidator ID="validate_code" runat="server" ControlToValidate="txt_product_code" CssClass="auto-style11" ErrorMessage="Product Code  Is Required"></asp:RequiredFieldValidator>
                    <br />
                    <asp:RangeValidator ID="validate_Product_code" runat="server" ControlToValidate="txt_Quentity" CssClass="auto-style13" ErrorMessage="Must Be in the numeric format" MaximumValue="25000" MinimumValue="1" Type="Double"></asp:RangeValidator>
                    </em></td>
            </tr>
            <tr>
                <td>&nbsp;</td>
                <td class="auto-style10">&nbsp;</td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td class="auto-style8"><strong>
                    <asp:Label ID="lbl_quentity" runat="server" CssClass="auto-style12" Text="Quantity"></asp:Label>
                    </strong></td>
                <td class="auto-style17">
                    <asp:TextBox ID="txt_Quentity" runat="server" TextMode="Number" Width="440px"></asp:TextBox>
                </td>
                <td class="auto-style3"><em>
                    <asp:RequiredFieldValidator ID="validate_quentity" runat="server" ControlToValidate="txt_Quentity" CssClass="auto-style11" ErrorMessage="Quentity Is Required"></asp:RequiredFieldValidator>
                    <br />
                    <asp:RangeValidator ID="validate_quntity_numeric" runat="server" ControlToValidate="txt_Quentity" CssClass="auto-style13" ErrorMessage="Must Be in the numeric format" MaximumValue="25000" MinimumValue="1" Type="Double"></asp:RangeValidator>
                    </em></td>
            </tr>
            <tr>
                <td>&nbsp;</td>
                <td class="auto-style10">&nbsp;</td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td>&nbsp;</td>
                <td class="auto-style4">PAYMNT PROCESS</td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td>&nbsp;</td>
                <td class="auto-style10">&nbsp;</td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td class="auto-style7"><strong>
                    <asp:Label ID="lbl_card_type" runat="server" CssClass="auto-style12" Text="Select Card Type"></asp:Label>
                    </strong></td>
                <td class="auto-style16">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <asp:DropDownList ID="DropDownList1" runat="server">
                        <asp:ListItem>Select Card Type</asp:ListItem>
                        <asp:ListItem>Visa</asp:ListItem>
                        <asp:ListItem>Master</asp:ListItem>
                        <asp:ListItem>Other</asp:ListItem>
                    </asp:DropDownList>
                </td>
                <td><em>
                    <asp:RequiredFieldValidator ID="validate_card_type" runat="server" ControlToValidate="DropDownList1" CssClass="auto-style11" ErrorMessage="Card Type  Is Required"></asp:RequiredFieldValidator>
                    </em></td>
            </tr>
            <tr>
                <td class="auto-style3"></td>
                <td class="auto-style9"></td>
                <td class="auto-style3"></td>
            </tr>
            <tr>
                <td class="auto-style7"><strong>
                    <asp:Label ID="lbl_card_num" runat="server" CssClass="auto-style12" Text="Card Number"></asp:Label>
                    </strong></td>
                <td class="auto-style16">
                    <asp:TextBox ID="txt_card_num" runat="server" MaxLength="16" TextMode="Number" Width="436px"></asp:TextBox>
                </td>
                <td><em>
                    <asp:RequiredFieldValidator ID="validate_card_num" runat="server" ControlToValidate="txt_card_num" CssClass="auto-style11" ErrorMessage="Card Number  Is Required"></asp:RequiredFieldValidator>
                    <br />
                    </em></td>
            </tr>
            <tr>
                <td>&nbsp;</td>
                <td class="auto-style10">&nbsp;</td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td class="auto-style8"><strong>
                    <asp:Label ID="lbl_expir" runat="server" CssClass="auto-style12" Text="Expire Date"></asp:Label>
                    </strong></td>
                <td class="auto-style17">
                    <asp:TextBox ID="txt_expire" runat="server" OnTextChanged="TextBox5_TextChanged" TextMode="Date" Width="196px"></asp:TextBox>
                </td>
                <td class="auto-style3"><em>
                    <asp:RequiredFieldValidator ID="validate_expire" runat="server" ControlToValidate="txt_expire" CssClass="auto-style11" ErrorMessage="Month/Year  Is Required"></asp:RequiredFieldValidator>
                    </em></td>
            </tr>
            <tr>
                <td>&nbsp;</td>
                <td class="auto-style10">&nbsp;</td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td class="auto-style7"><strong>
                    <asp:Label ID="lbl_cvc" runat="server" CssClass="auto-style12" Text="CVC NO"></asp:Label>
                    </strong></td>
                <td class="auto-style16">
                    <asp:TextBox ID="txt_cvc" runat="server" MaxLength="3"></asp:TextBox>
                </td>
                <td><em>
                    <asp:RequiredFieldValidator ID="validate_cvc" runat="server" ControlToValidate="txt_cvc" CssClass="auto-style11" ErrorMessage="CVC  Is Required"></asp:RequiredFieldValidator>
                    <br />
                    </em></td>
            </tr>
            <tr>
                <td>&nbsp;</td>
                <td class="auto-style10">&nbsp;</td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td class="auto-style7"><strong>
                    <asp:Label ID="lbl_name_card" runat="server" CssClass="auto-style12" Text="Name On Card"></asp:Label>
                    </strong></td>
                <td class="auto-style16">
                    <asp:TextBox ID="txt_first_name" runat="server" Width="192px">First Name</asp:TextBox>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <asp:TextBox ID="txt_last_name" runat="server" Width="192px">Last Name</asp:TextBox>
                </td>
                <td><em>
                    <asp:RequiredFieldValidator ID="validate_fname" runat="server" ControlToValidate="txt_first_name" CssClass="auto-style11" ErrorMessage="Firest Name Is Required"></asp:RequiredFieldValidator>
                    <br />
                    <asp:RequiredFieldValidator ID="validate_lname" runat="server" ControlToValidate="txt_last_name" CssClass="auto-style11" ErrorMessage="Last Name Is Required"></asp:RequiredFieldValidator>
                    </em></td>
            </tr>
            <tr>
                <td>&nbsp;</td>
                <td class="auto-style10">&nbsp;</td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td>&nbsp;</td>
                <td class="auto-style6"><strong>
                    <asp:Button ID="btn_submit" runat="server" CssClass="auto-style5" OnClick="btn_submit_Click" Text="SUBMIT" />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </strong>
                    <input id="btn_reset" type="reset" value="RESET" /></td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td>&nbsp;</td>
                <td class="auto-style10">&nbsp;</td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td>&nbsp;</td>
                <td class="auto-style10">&nbsp;</td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td>&nbsp;</td>
                <td class="auto-style10">&nbsp;</td>
                <td>&nbsp;</td>
            </tr>
        </table>
    </form>
</body>
</html>
