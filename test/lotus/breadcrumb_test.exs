defmodule Lotus.BreadcrumbTest do
  use Lotus.Support.ConnCase, async: true

  @moduletag :component_breadcrumb

  alias Lotus.Breadcrumb

  test "Creates a Breadcrumb" do
    html =
      render_surface do
        ~F"""
        <Breadcrumb>
          <li><a href="" /></li>
          <li><a href="" /></li>
          <li><span /></li>
        </Breadcrumb>
        """
      end

    assert html =~ """
           <ul class="uk-breadcrumb">
             <li><a href=""></a></li>
             <li><a href=""></a></li>
             <li><span></span></li>
           </ul>
           """
  end
end
