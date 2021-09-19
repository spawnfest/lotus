defmodule Lotus.CardFooterTest do
  use Lotus.Support.ConnCase, async: true

  @moduletag :component_card_footer

  alias Lotus.CardFooter

  test "Creates a CardFooter" do
    html =
      render_surface do
        ~F"""
        <CardFooter>Hello</CardFooter>
        """
      end

    assert html =~ """
           <div class="uk-card-footer">
             Hello
           </div>
           """
  end
end
