import { UIProvider } from '../src/theme/UIProvider';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  (Story) => (
    <UIProvider>
      <Story />
    </UIProvider>
  ),
]