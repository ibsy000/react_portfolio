import React from 'react'
import FrameworksColumn from './FrameworksColumn'
import LanguagesColumn from './LanguagesColumn'

export default function LanguagesAndFrameworks() {
    return (
        <>
            {/*------------- Languages and Frameworks Column ----------------*/}
            <div class="col-lg-4" id="languages-frameworks">
                <h3>Languages & Frameworks</h3>
                <div class="row">

                    {/*-------------- Languages Column --------------*/}
                    <LanguagesColumn />

                    {/*-------------- Frameworks Column -------------*/}
                    <FrameworksColumn />

                </div>
            </div>
        </>
    )
}
