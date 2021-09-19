defmodule Lotus.SubnavTest do
  use Lotus.Support.ConnCase, async: true

  @moduletag :component_subnav

  alias Lotus.Subnav

  test "Creates a Subnav" do
    html =
      render_surface do
        ~F"""
        <Subnav>Hello</Subnav>
        """
      end

    assert html =~ """
           <div class="uk-subnav">
             Hello
           </div>
           """
  end
end
