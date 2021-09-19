defmodule Lotus.ContainerTest do
  use Lotus.Support.ConnCase, async: true

  @moduletag :component_container

  alias Lotus.Container

  test "Creates a Container" do
    html =
      render_surface do
        ~F"""
        <Container>Hello</Container>>
        """
      end

    assert html =~ """
           <div class="uk-container">
             Hello
           </div>
           """
  end

  test "Creates a small Container" do
    html =
      render_surface do
        ~F"""
        <Container size="small">Hello</Container>>
        """
      end

    assert html =~ """
           <div class="uk-container uk-container-small">
             Hello
           </div>
           """
  end

  test "Creates a small Container with classes" do
    html =
      render_surface do
        ~F"""
        <Container size="small" class="uk-padding">Hello</Container>>
        """
      end

    assert html =~ """
           <div class="uk-container uk-container-small uk-padding">
             Hello
           </div>
           """
  end
end
