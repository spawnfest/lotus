defmodule Lotus.HeadingTest do
  use Lotus.Support.ConnCase, async: true

  @moduletag :component_heading

  alias Lotus.Heading

  test "Creates a Heading" do
    html =
      render_surface do
        ~F"""
        <Heading>
          Hello
        </Heading>
        """
      end

    assert html =~ """
           <h1>
             Hello
           </h1>
           """
  end
end
