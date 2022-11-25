import Link from 'next/link'

const Footer = () => {
    return (
        <footer>
            <div>
                <Link href="/conditions" id="conditions">Conditions of Use</Link>
                <Link href="/privacy" id="privacy">Privacy Notice</Link>
                <Link href="/help" id="help">Help</Link>
            </div>
            <p>
                © 1996-2022, Amazon.com, Inc. or its affiliates
            </p>
        </footer>
    );
}
 
export default Footer;