import { mount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = mount(HelloWorld as any, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
