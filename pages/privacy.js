import React from 'react'
import '../static/css/style.css'

class Privacy extends React.Component {
  render() {
    return (
      <div>
        <title>Privacy Policy | Ryo Suzuki</title>
        <div className="ui stackable grid">
          <div className="one wide column"></div>
          <div className="eleven wide column centered">
            <section className="container">
              <h1 className="ui huge header">Privacy Policy</h1>
              <p><strong>Last updated:</strong> May 5, 2026</p>

              <p>
                This policy describes how Ryo Suzuki's personal research and productivity tools, including the private "AI Agent" Google OAuth application, access and use Google user data.
              </p>

              <h2>Scope</h2>
              <p>
                The AI Agent application is a private tool used by Ryo Suzuki to automate personal and research workflows such as reading and organizing email, checking calendar events, and accessing Google Drive documents for requested tasks.
              </p>

              <h2>Google User Data Accessed</h2>
              <p>
                Depending on the task, the application may request access to Gmail, Google Calendar, Google Drive, Google Docs, Google Sheets, Google Slides, Google Tasks, Google Contacts, Google Chat, Google Forms, Google Classroom, and Google Apps Script data.
              </p>

              <h2>How Data Is Used</h2>
              <p>
                Google user data is used only to complete user-requested automation tasks, such as summarizing inbox messages, searching email, preparing drafts, reading calendar events, organizing files, or creating and updating documents. The application does not sell Google user data, use it for advertising, or transfer it to unrelated third parties.
              </p>

              <h2>Storage and Retention</h2>
              <p>
                OAuth credentials and local caches may be stored on Ryo Suzuki's own devices or private automation workspace to support requested workflows. Cached data is kept only as long as needed for local productivity and automation tasks and may be deleted when no longer needed.
              </p>

              <h2>Sharing</h2>
              <p>
                Google user data is not shared with third parties except when explicitly requested by the user, required to complete a user-directed task, or required by law.
              </p>

              <h2>Security</h2>
              <p>
                Credentials are stored using local secure storage or an encrypted local keyring where available. Access to the automation environment is limited to Ryo Suzuki's personal computing environment.
              </p>

              <h2>Google API Services User Data Policy</h2>
              <p>
                The application's use and transfer of information received from Google APIs adheres to the Google API Services User Data Policy, including the Limited Use requirements.
              </p>

              <h2>Revocation and Deletion</h2>
              <p>
                Access can be revoked at any time from the Google Account permissions page. Local cached data and stored credentials can be deleted by contacting Ryo Suzuki or by removing the local automation configuration from the relevant device.
              </p>

              <h2>Contact</h2>
              <p>
                Questions about this policy can be sent to <a href="mailto:ryosuzk@gmail.com">ryosuzk@gmail.com</a>.
              </p>
            </section>
          </div>
          <div className="one wide column"></div>
        </div>
      </div>
    )
  }
}

export default Privacy
