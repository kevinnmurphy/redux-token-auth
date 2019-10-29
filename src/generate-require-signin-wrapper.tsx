import * as React from 'react'
import { ComponentClass } from 'react'
import { connect } from 'react-redux'
import GenerateRequireSignInWrapperConfig from './types'
import ReduxState from './types'
import RequireSignInWrapper from './types'

const generateRequireSignInWrapper = (
  { redirectPathIfNotSignedIn }: GenerateRequireSignInWrapperConfig
): RequireSignInWrapper => {
  const requireSignInWrapper = (PageComponent: ComponentClass): ComponentClass => {
    interface WrapperProps {
      readonly hasVerificationBeenAttempted: boolean
      readonly isSignedIn: boolean
      readonly history: {
        readonly replace: (path: string) => void
      }
    }

    class GatedPage extends React.Component<WrapperProps> {
      public componentWillReceiveProps(nextProps: WrapperProps): void {
        const {
          history,
          hasVerificationBeenAttempted,
          isSignedIn,
        } = nextProps
        if (hasVerificationBeenAttempted && !isSignedIn) {
          history.replace(redirectPathIfNotSignedIn)
        }
      }

      public render (): JSX.Element {
        const {
          hasVerificationBeenAttempted,
          isSignedIn,
        } = this.props

        console.log('props inside GatedPage render')
        console.log(...this.props);

        return (hasVerificationBeenAttempted && isSignedIn) ?
          //PageComponent {...this.props} />
          React.createElement(PageComponent.type, __assign({}, this.props))
          :
          <div></div>;
      }
    }

    const mapStateToProps = (state: ReduxState) => ({
      hasVerificationBeenAttempted: state.reduxTokenAuth.currentUser.hasVerificationBeenAttempted,
      isSignedIn: state.reduxTokenAuth.currentUser.isSignedIn
    })

    return connect(
      mapStateToProps,
    )(GatedPage)
  }

  return requireSignInWrapper
}

export default generateRequireSignInWrapper
